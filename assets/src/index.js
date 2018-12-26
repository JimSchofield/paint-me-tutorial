import MyCanvas from './MyCanvas'; // new!

const { registerBlockType } = wp.blocks;

registerBlockType("guty-paint/block", {
    title: "Guty Paint",
    icon: "admin-customizer",
    category: "common",

    attributes: {},

    edit(props) {
        return (
            <MyCanvas /> // instead of rewriting, we just use our component
        );
    },

    save(props) {
        return (
            <MyCanvas />
        );
    }
});
