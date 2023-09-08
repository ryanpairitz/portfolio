import { animated, useSpring } from "@react-spring/web";
import { useLayoutEffect, useState } from "react";

const NavWrapper = ({ condense, isHome, children }) => {
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
                            ...style
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