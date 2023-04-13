import { useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Underline from "./Underline";

const AnimatedNavLink = ({ to, children }) => {
    const activeLinkClass = "nav-link nav-link-active";
    const inactiveLinkClass = "nav-link";
    const ref = useRef();
    const [width, setWidth] = useState(0);
    const [active, setActive] = useState(false);
    const [hovering, setHovering] = useState(false);
    const location = useLocation();
    useLayoutEffect(() => {
        setActive(location.pathname.replace('/','') === to.replace('/',''));
    }, [location, to]);
    useLayoutEffect(() => {
        setWidth(ref.current.getBoundingClientRect().width);
    }, []);

    return (
        <Link
            to={to}
            onMouseEnter={() => setHovering(!hovering)}
            onMouseLeave={() => setHovering(false)}
            className={
                active ? activeLinkClass : inactiveLinkClass
            }>
                <div style={{
                    position: "relative"
                }}>
                    <span ref={ref}>
                        {children}
                    </span>
                        <Underline width={width} height={8}
                            active={active}
                            hovering={hovering}
                            color={active ? "var(--scarlet)" : "var(--sun-conure)"}
                            style={{
                                position: "absolute",
                                bottom: "calc(-25rem / 34)",
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "block",
                                width: width
                            }} />
                </div>
        </Link>
    );
};

export default AnimatedNavLink;