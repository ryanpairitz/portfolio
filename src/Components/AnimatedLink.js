import { useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from "@react-spring/web";

const AnimatedReactLink = animated(Link);

const AnimatedLink = ({ label, to, href, state, className, children }) => {
    const [hovering, setHovering] = useState(false);
    const linkStyle = useSpring({
        to: {
            fontWeight: hovering ? 1016 : 388
        },
    });

    return (
        <>
            {href ?
                <animated.a style={linkStyle}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className={className + " link-text"}
                    href={href}
                    target="_blank" rel="noopener noreferrer"
                >
                    {label && label}
                    {children}
                </animated.a>
                :
                <AnimatedReactLink style={linkStyle}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className={className + " link-text"}
                    to={to}
                    state={state}
                >
                    {label && label}
                    {children}
                </AnimatedReactLink>
            }
        </>
    );
};

export default AnimatedLink;