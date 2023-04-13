import { animated, useTransition } from "react-spring";

function convertRemToPixels(x) {
    const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize)
    return x * remValue / 34;
}

const Underline = ({ width, height, active, hovering, color, style }) => {
    const transition = useTransition(active || hovering, {
        from: {
            width: 0,
            opacity: 0
        },
        enter: {
            width: width,
            opacity: 1
        },
        leave: {
            width: 0,
            opacity: 0
        },
    });
    height = convertRemToPixels(height);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            style={style}>
            {transition((animatedStyle, content) => (
                content &&
                <animated.rect x="0" y="0" fill={color} height={height} style={animatedStyle} />
            ))}
        </svg>
    );
};

export default Underline;