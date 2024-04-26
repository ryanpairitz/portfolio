import { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from "@react-spring/web";

const AnimatedReactLink = animated(Link);

const AnimatedLink = ({ label, to, href, state, children }) => {
    const [active, setActive] = useState(false);
    const linkStyle = useSpring({
        to: {
            // scale: active ? 1.0557 : 1
            fontWeight: active ? 1016 : 388
        },
        // delay: 100,
    });

    return (
        <>
            {href ?
                <animated.a style={linkStyle}
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    className="link-text"
                    href={href}
                    target="_blank" rel="noopener noreferrer"
                >{label ? label : children}
                </animated.a> :
                <AnimatedReactLink style={linkStyle}
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}
                    className="link-text"
                    to={to}
                    state={state}
                >
                    {label ? label : children}
                </AnimatedReactLink>
            }
        </>
    );
};

export default AnimatedLink;