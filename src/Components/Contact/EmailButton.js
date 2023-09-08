import { useState } from 'react';
import { useSpring, animated, useTransition, useSpringRef, useChain } from "@react-spring/web";
import useMeasure from "react-use-measure";
import './Contact.css';
import IconEmail from './IconEmail';

/* split address into array of individual letters, with index as key
so it can be used in useTransition */
const addressChars = "ryn.pair@me.com".split("").map((value, index) => (
    {key: index, letter: value}
));
function convertRemToPixels(x) {
    const remValue = parseFloat(getComputedStyle(document.documentElement).fontSize)
    return x * remValue / 34;
}

const EmailButton = ({ color }) => {
    const baseWidth = convertRemToPixels(21);
    const [ref, bounds] = useMeasure();
    const [hovering, setHover] = useState(false);
    const springApi = useSpringRef();
    const buttonStyles = useSpring({
        ref: springApi,
        from: {
            width: baseWidth,
            scale: 1,
            backgroundColor: "rgba(" + color + ",0.15)",
            fill: "rgba(" + color + ",0.77)",
            // color: "rgba(" + color + ",0.77)",
        },
        to: {
            width: hovering ? (bounds.width + baseWidth) : baseWidth,
            scale: hovering ? 1.0557 : 1,
            backgroundColor: hovering ? "rgba(" + color + ",0.382)" : "rgba(" + color + ",0.15)",
            // color: hovering ? "rgba(" + color + ",1)" : "rgba(" + color + ",0.77)",
            fill: hovering ? "rgba(" + color + ",1)" : "rgba(" + color + ",0.77)",
        },
        delay: 100,
    });
    const transApi = useSpringRef();
    const transitions = useTransition(hovering ? addressChars : [], {
        ref: transApi,
        from: {opacity: 0, scale: 0},
        enter: {opacity: 1, scale: 1},
        trail: 300 / addressChars.length,
    });
    useChain([springApi, transApi], [0,0.1]);

    return (
        <animated.a className='button'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            href={hovering ? "mailto:ryn.pair@me.com" : "#"}
            style={buttonStyles}
        >
            <IconEmail width={baseWidth} className="email-icon"/>
            {hovering &&
                <span
                    className='button-text'
                    ref={ref}
                >
                    {transitions((style, addressChars) => (
                        <animated.span
                            style={style}
                        >
                            {addressChars.letter}
                        </animated.span>
                    ))}
                </span>
            }
        </animated.a>
    );
};

export default EmailButton;