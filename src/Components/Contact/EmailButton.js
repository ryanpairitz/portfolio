import { useState } from 'react';
import { ReactComponent as EmailIcon } from '../img/icons_email.svg';
import { useSpring, animated, useTransition } from "react-spring";
import useMeasure from "react-use-measure";
import './Contact.css';

const addressChars = [
    {key: 1, value: 'r'},
    {key: 2, value: 'y'},
    {key: 3, value: 'n'},
    {key: 4, value: '.'},
    {key: 5, value: 'p'},
    {key: 6, value: 'a'},
    {key: 7, value: 'i'},
    {key: 8, value: 'r'},
    {key: 9, value: '@'},
    {key: 10, value: 'm'},
    {key: 11, value: 'e'},
    {key: 12, value: '.'},
    {key: 13, value: 'c'},
    {key: 14, value: 'o'},
    {key: 15, value: 'm'}
]

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
                    {transitions((style, addressChar) => (
                        <animated.span
                            style={style}
                        >
                            {addressChar.value}
                        </animated.span>
                    ))}
                </span>
            }
        </animated.a>
    );
};

export default EmailButton;