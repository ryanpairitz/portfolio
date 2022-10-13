import { useState } from 'react';
import { ReactComponent as EmailIcon } from '../img/icons_email.svg';
import { useSpring, animated } from "react-spring";
import useMeasure from "react-use-measure";
import './Contact.css';

const EmailButton = () => {
    const [ref, bounds] = useMeasure();
    const [showEmail, setShowEmail] = useState(false);
    const buttonStyles = useSpring({
        width: showEmail ? (bounds.width + 13) : 13
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
                    ryn.pair@me.com
                </span>
            }
        </animated.a>
    );
};

export default EmailButton;