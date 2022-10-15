import { useState } from 'react';
import { ReactComponent as EmailIcon } from '../img/icons_email.svg';
import { useSpring, animated, useTransition } from "react-spring";
import useMeasure from "react-use-measure";
import './Contact.css';

/* split address into array of individual letters, with index as key
so it can be used in useTransition */
const addressChars = "ryn.pair@me.com".split("").map((value, index) => (
    {key: index, letter: value}
));

const EmailButton = () => {
    const [ref, bounds] = useMeasure();
    const [showEmail, setShowEmail] = useState(false);
    const buttonStyles = useSpring({
        to: {
            width: showEmail ? (bounds.width + 13) : 13,
            scale: showEmail ? 1.0557 : 1
        },
        delay: 100,
    });
    const transitions = useTransition(showEmail ? addressChars : [], {
        from: {opacity: 0, scale: 0},
        enter: {opacity: 1, scale: 1},
        delay: 300,
        trail: 300 / addressChars.length,
    });

    return (
        <animated.a className='button'
            onMouseEnter={() => setShowEmail(true)}
            onMouseLeave={() => setShowEmail(false)}
            href={showEmail ? "mailto:ryn.pair@me.com" : "#"}
            style={buttonStyles}
        >
            <EmailIcon className="email-icon"/>
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