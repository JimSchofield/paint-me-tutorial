import React from "react";

export default class MyCanvas extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawing: false,
            inProgressPath: []
        };

        // need to bind this to the method so we can do
        // things like 'setState'
        this.startDrawing = this.startDrawing.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.endDrawing = this.endDrawing.bind(this);
    }

    // Whenever component mounts or update, re-render the canvas
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }

    // This should always re-render the canvas as if its a blank slate
    // This means we need to store a "history" of all strokes that the user
    // creates in the block
    updateCanvas() {
        // Find the width/height of the canvas to use later
        const width = this.refs.canvas.width;
        const height = this.refs.canvas.height;

        // We're going to access the canvas as a ref so we can do things directly
        // to the canvas.  If you aren't familiar with context, take a look at
        // a canvas tutorial.  Basically, it's what you do most of your
        // painting and work on
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");

        // We're going to start by filling the canvas with orange
        ctx.fillStyle = "orange";
        ctx.fillRect(0, 0, width, height);

        // draw all the strokes
        this.props.strokeList.forEach(stroke => {
            console.log(stroke);
            this.drawStrokes(stroke, ctx);
        });

        // draw any stroke that is in progress
        if (this.state.isDrawing && this.state.inProgressPath.length > 1) {
            this.drawStrokes(this.state.inProgressPath,ctx);
        }
    }

    drawStrokes(strokes, context) {
        const firstPoint = strokes[0];
        context.moveTo(firstPoint.x, firstPoint.y);

        for (let index = 1; index < strokes.length; index++) {
            const nextPoint = strokes[index];
            context.lineTo(nextPoint.x, nextPoint.y);
        }

        context.stroke();
    }

    startDrawing() {
        this.setState({ isDrawing: true });
    }

    handleMouseMove(event) {
        if (this.state.isDrawing) {
            const domRect = event.target.getBoundingClientRect();
            const top = domRect.top;
            const left = domRect.left;
            const point = { x: event.pageX - left, y: event.pageY - top };
            this.setState({
                inProgressPath: [...this.state.inProgressPath, point]
            });
        }
    }

    endDrawing() {
        this.props.addStroke(this.state.inProgressPath);
        this.setState({ isDrawing: false, inProgressPath: [] });
    }

    render() {
        return (
            <canvas
                width="400"
                height="400"
                ref="canvas"
                onMouseDown={this.startDrawing}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.endDrawing}
            />
        );
    }
}
