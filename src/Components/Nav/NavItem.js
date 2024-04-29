import { useLocation } from "react-router-dom";
import AnimatedNavLink from "../AnimatedNavLink";
import { useState } from "react";
import AnimatedLink from "../AnimatedLink";
import { useSpring, animated } from "@react-spring/web";

const NavItem = ({ to, children }) => {
    return (
        <AnimatedNavLink to={to} label={children}
            className="nav-item">
        </AnimatedNavLink>
    );
};

export default NavItem;