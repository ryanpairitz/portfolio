import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from "@react-spring/web";

const AnimatedReactLink = animated(Link);

const AnimatedLink = ({ label, to, href, state, className, inverted, hoveringOnParent, children }) => {
    const [hovering, setHovering] = useState(false);
    const linkStyle = useSpring(inverted ?
        {
            to: {
                fontWeight: hovering ? 388 : 1016
            },
        }
        :
        {
            to: {
                fontWeight: hovering ? 1016 : 388
            },
        }
    );

    useEffect(() => {
        setHovering(hoveringOnParent);
    }, [hoveringOnParent])

    return (
        <>
            {href ?
                <animated.a style={linkStyle}
                    onMouseEnter={() => hoveringOnParent == null && setHovering(true)}
                    onMouseLeave={() => hoveringOnParent == null && setHovering(false)}
                    className={className + " link"}
                    href={href}
                    target="_blank" rel="noopener noreferrer"
                >
                    {label && label}
                    {children}
                </animated.a>
                :
                <AnimatedReactLink style={linkStyle}
                    onMouseEnter={() => hoveringOnParent == null && setHovering(true)}
                    onMouseLeave={() => hoveringOnParent == null && setHovering(false)}
                    className={className + " link"}
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