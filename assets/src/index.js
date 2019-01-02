import MyCanvas from './MyCanvas'; // new!

const { registerBlockType } = wp.blocks;

registerBlockType("guty-paint/block", {
    title: "Guty Paint",
    icon: "admin-customizer",
    category: "common",

    attributes: {
        strokeList: {
            type: Array,
            default: []
        }
    },

    edit(props) {

        const { setAttributes } = props;
        const { strokeList } = props.attributes;

        function addStroke(stroke) {
            setAttributes({
                strokeList: [...strokeList, stroke],
            });
        }

        return (
            <>
            <MyCanvas
                addStroke={addStroke}
                strokeList={strokeList}
                />
            </>
        );
    },

    save(props) {

        const { strokeList } = props.attributes;

        return (
            <div 
                class="paint-me"
                data-stroke-list={JSON.stringify(strokeList)}>
            </div>
        );
    }
});
