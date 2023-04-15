import { useLayoutEffect, useRef, useState } from "react";
import Underline from "./Underline";

const AnimatedButton = ({ id, className, active, onClickHandler, reverse, useSwatches, children }) => {
    const ref = useRef();
    const [width, setWidth] = useState(0);
    const [hovering, setHovering] = useState(false);
    useLayoutEffect(() => {
        setWidth(ref.current.getBoundingClientRect().width);
    },[]);
    if (!className) className = "";

    return (
        <span
            id={id}
            onClick={onClickHandler}
            onMouseEnter={() => setHovering(!hovering)}
            onMouseLeave={() => setHovering(false)}
            className={"underline-button " + className}>
            <span ref={ref}>
                {children}
            </span>
            <Underline width={width} height={8}
                active={active}
                hovering={hovering}
                reverse={reverse}
                color="#E2911B"
                useSwatches={useSwatches}
            />
        </span>
    );
};

export default AnimatedButton;