// A node thingy that helps with paths... not sure on specifics
const path = require("path");

// Config for regular blocks
module.exports = {
    // entry points to the main js file for our build
    entry: "./assets/src/index.js",
    // and output lets us specify where it should be built to
    output: {
        path: path.resolve(__dirname, "./assets/dist"),
        filename: "build.js"
    },
    module: {
        rules: [
            {
                // If Webpack sees a .js file, use babel when it builds
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    stats: {
        // Pretty colors in messages!
        colors: true
    },
    externals: {
        // We don't want webpack to bundle React in our files (that would make our
        // files huge!) so we say that whenever a file requires "React",
        // Webpack won't bundle it.  We're promising, though, that we're providing
        // React somewhere else (maybe a CDN or on the window)
        // so luckily we can through WordPress.  React is in core now, yay!
        react: "React"
    }
};
