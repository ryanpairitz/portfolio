import { animated, useSpring } from "@react-spring/web";
import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NavWrapper = ({ condense, isHome, children }) => {
    const { state } = useLocation();
    const fillWrapper = () => window.scrollY >= 144;
    const [scrolled, setScrolled] = useState(fillWrapper);
    useLayoutEffect(() => {
        const updateHeader = () => setScrolled(fillWrapper);
        window.addEventListener('scroll', updateHeader);
        return () =>
            window.removeEventListener('scroll', updateHeader);
    });
    const style = useSpring({
        to: {
            opacity: (scrolled || !isHome) ? 1 : 0,
        }
    });
    return (
        condense ?
            <div className="nav-wrapper">
                <div className="nav-wrapper-content">
                    <animated.div
                        className="nav-background"
                        style={{
                            ...style,
                            backgroundColor: state?.theme.neutral ? state?.theme.neutral : "#0e1314",
                        }}
                    />
                    {children}
                </div>
            </div>
            :
            <>
                {children}
            </>
    );
};

export default NavWrapper;