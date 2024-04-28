import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { animated, useSpring, useTransition } from "@react-spring/web";

const AnimatedReactNavLink = animated(NavLink);

const AnimatedNavLink = ({ label, to, className, children }) => {
    const [hovering, setHovering] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const linkStyle = useSpring({
        to: {
            fontWeight: hovering ? 1016 : 388
        },
    });
    const transitions = useTransition(isActive, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <AnimatedReactNavLink style={linkStyle}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={className + " link-text"}
            to={to}
            end
        >
            {({ isActive }) => {
                setIsActive(isActive);
                return (
                    <>
                        {label ? label : children}
                        {
                            transitions((style, item) => (
                                item && <animated.svg style={style} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <path
                                        d="M3 5.08655C4.38071 5.08655 5.5 3.96726 5.5 2.58655C5.5 1.20584 4.38071 0.0865479 3 0.0865479C1.61929 0.0865479 0.5 1.20584 0.5 2.58655C0.5 3.96726 1.61929 5.08655 3 5.08655Z" fill="#28B861" />
                                </animated.svg>
                            ))
                        }
                    </>
                )
            }}
        </AnimatedReactNavLink>
    );
};

export default AnimatedNavLink;