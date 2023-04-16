import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const AnimatedNavLink = ({ to, children }) => {
    const [active, setActive] = useState(false);
    const location = useLocation();
    useLayoutEffect(() => {
        setActive(location.pathname.replace('/', '') === to.replace('/', ''));
    },[location,to]);

    return (
        <AnimatedButton
            defaultColor="#E2911B"
            activeColor="#F5F0D3"
            defaultUnderlineColor="#E2911B"
            activeUnderlineColor="#DD4623"
            to={to}
            active={active}
            className="nav-link">
            {children}
        </AnimatedButton>
    );
};

export default AnimatedNavLink;