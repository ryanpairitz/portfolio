import { animated, useSpring, useTransition } from "@react-spring/web";

function convertRemToPixels(x) {
    const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize)
    return x * remValue / 34;
}

const Underline = ({ width, height, active, hovering,
    color, activeColor, reverse, useSwatches }) => {
    if (color === null) {
        color = "#E2911B";
    }
    if (activeColor === null) {
        activeColor = color;
    }
    if (active === null) {
        active = hovering;
    }
    const transition = useTransition(reverse ? !(active || hovering) : (active || hovering), {
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
        reverse: reverse
    });
    const colorStyle = useSpring({
        from: {
            fill: active ? color : activeColor
        },
        to: {
            fill: active ? activeColor : color
        }
    })
    height = convertRemToPixels(height);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            className="underline"
            style={{
                width: width
            }}>
            {useSwatches ?
                <g>
                    <defs>
                        {transition((animatedStyle, content) => (
                            content &&
                            <animated.rect id="SVGID_1_" height={height} style={animatedStyle} />
                        ))}
                    </defs>
                    <clipPath id="SVGID_00000044864584398808820940000010129106012025892265_">
                        <use xlinkHref="#SVGID_1_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000044864584398808820940000010129106012025892265_)">
                        <rect fill="#F5F0D3" width={width * 0.6 / 3} height={height} />
                        <rect x={width * 0.6 / 3} fill="#001412" width={width * 0.6 / 3} height={height} />
                        <rect x={width * 0.6 / 3 * 2} fill="#0B1C18" width={width * 0.6 / 3} height={height} />
                        <rect x={width * 0.6} fill="#155243" width={width * 0.3 / 2} height={height} />
                        <rect x={(width * 0.6) + (width * 0.3 / 2)} fill="#E2911B" width={width * 0.3 / 2} height={height} />
                        <rect x={(width * 0.6) + (width * 0.3)} fill="#DD4623" width={width * 0.1 / 2} height={height} />
                        <rect x={width - (width * 0.1 / 2)} fill="#EAD7A1" width={width * 0.1 / 2} height={height} />
                    </g>
                </g>
                :
                transition((animatedStyle, content) => (
                    content &&
                    <animated.rect x="0" y="0" height={height}
                        style={{
                            ...animatedStyle,
                            ...colorStyle
                        }} />
                ))}
        </svg>
    );
};

export default Underline;