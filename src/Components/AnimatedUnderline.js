import { animated, useSpring } from "@react-spring/web";

const AnimatedUnderline = ({ width, active, hovering,
    color, activeColor, reverse, useSwatches }) => {
    if (color == null) {
        color = "#E2911B";
    }
    if (activeColor == null) {
        activeColor = color;
    }
    if (active == null) {
        active = hovering;
    }
    const style = useSpring({
        to: {
            width: (reverse && !(active || hovering)) || 
                (!reverse && (active || hovering)) ? width : 0,
            opacity: (reverse && !(active || hovering)) || 
                (!reverse && (active || hovering)) ? 1 : 0,
            fill: active ? activeColor : color,
        },
    });

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox={`0 0 ${width} 7.2`}
            preserveAspectRatio="xMidYMin slice"
            className="underline"
            style={{
                width: width
            }}>
            {useSwatches ?
                <g>
                    <defs>
                        <animated.rect id="SVGID_1_" height="100%" style={style} />
                    </defs>
                    <clipPath id="SVGID_00000044864584398808820940000010129106012025892265_">
                        <use xlinkHref="#SVGID_1_" overflow="visible" />
                    </clipPath>
                    <g clipPath="url(#SVGID_00000044864584398808820940000010129106012025892265_)">
                        <rect fill="#F5F0D3" width={width * 0.6 / 3} height="100%" />
                        <rect x={width * 0.6 / 3} fill="#060707" width={width * 0.6 / 3} height="100%" />
                        <rect x={width * 0.6 / 3 * 2} fill="#101111" width={width * 0.6 / 3} height="100%" />
                        <rect x={width * 0.6} fill="#0C7A6E" width={width * 0.3 / 2} height="100%" />
                        <rect x={(width * 0.6) + (width * 0.3 / 2)} fill="#E2911B" width={width * 0.3 / 2} height="100%" />
                        <rect x={(width * 0.6) + (width * 0.3)} fill="#DD4623" width={width * 0.1 / 2} height="100%" />
                        <rect x={width - (width * 0.1 / 2)} fill="#EAD7A1" width={width * 0.1 / 2} height="100%" />
                    </g>
                </g>
                :
                <animated.rect x="0" y="0" height="100%" style={style} />
                }
        </svg>
    );
};

export default AnimatedUnderline;