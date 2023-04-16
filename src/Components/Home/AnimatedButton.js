import { useLayoutEffect, useRef, useState } from "react";
import AnimatedUnderline from "./AnimatedUnderline";
import { isMobile } from "react-device-detect";
import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";

const Span = (props) => <span {...props}/>

const AnimatedButton = ({ id, className, active, onClickHandler, to,
    defaultColor, activeColor,
    defaultUnderlineColor, activeUnderlineColor, 
    reverse, useSwatches, children }) => {
    if (defaultColor == null) defaultColor = "inherit";
    if (activeColor == null) activeColor = defaultColor;
    const Container = to ? Link : Span;
    const ref = useRef();
    const [width, setWidth] = useState(0);
    const [hovering, setHovering] = useState(false);
    const style = useSpring({
        to: {
            color: active || hovering ? activeColor : defaultColor,
        },
    });
    useLayoutEffect(() => {
        setWidth(ref.current.getBoundingClientRect().width);
    },[]);
    if (!className) className = "";

    return (
        <Container
            id={id} to={to}
            onClick={onClickHandler}
            onMouseEnter={isMobile ? null : () => setHovering(!hovering)}
            onMouseLeave={isMobile ? null : () => setHovering(false)}
            className={"underline-button " + className}>
            <animated.span ref={ref} style={style}>
                {children}
            </animated.span>
            <AnimatedUnderline width={width} height={8}
                active={active}
                hovering={hovering}
                reverse={reverse}
                color={defaultUnderlineColor}
                activeColor={activeUnderlineColor}
                useSwatches={useSwatches}
            />
        </Container>
    );
};

export default AnimatedButton;