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

const EmailButton = ({ style }) => {
    const baseWidth = convertRemToPixels(21);
    const [ref, bounds] = useMeasure();
    const [showEmail, setShowEmail] = useState(false);
    const springApi = useSpringRef();
    const buttonStyles = useSpring({
        ref: springApi,
        from: {
            width: baseWidth,
            scale: 1
        },
        to: {
            width: showEmail ? (bounds.width + baseWidth) : baseWidth,
            scale: showEmail ? 1.0557 : 1
        },
        delay: 100,
    });
    const transApi = useSpringRef();
    const transitions = useTransition(showEmail ? addressChars : [], {
        ref: transApi,
        from: {opacity: 0, scale: 0},
        enter: {opacity: 1, scale: 1},
        trail: 300 / addressChars.length,
    });
    useChain([springApi, transApi], [0,0.1]);

    return (
        <animated.a className='button'
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
            href={showEmail ? "mailto:ryn.pair@me.com" : "#"}
            style={{ ...style, ...buttonStyles }}
        >
            <IconEmail width={baseWidth} className="email-icon"/>
            {showEmail &&
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