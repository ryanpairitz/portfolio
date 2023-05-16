import { animated, useSpring, useTransition } from "@react-spring/web";
import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Brandmark from "./Brandmark";
import Logotype from "./Logotype";
import NavWrapper from "./NavWrapper";
import SocialsList from "./SocialsList";

const Nav = () => {
    const scalar = 1.0557;
    const location = useLocation();
    const navigate = useNavigate();
    const [hovering, setHovering] = useState(false);
    const [isHome, setIsHome] = useState(true);
    const [isDefault, setIsDefault] = useState(true);
    useLayoutEffect(() => {
        // check if either in main view or in project details;
        // switching from either to the other should trigger animations
        setIsHome(!location.pathname.includes("project"));
        // track if the history stack is empty (i.e. if current route was loaded
        // on initial page load), so animated items won't transition from out of
        // nowhere; instead, animations are triggered only by internal location change.
        // This is determined by if the location key is set to default. It's a unique
        // key otherwise.
        setIsDefault(location.key === "default");
    }, [location]);
    // TODO: if !isHome and isDefault, theme wont be passed in the state;
    // would need to manually load in the theme data using params
    // TO DO THIS, implement createBrowserRouter, then in ProjectCard,
    // add loader function to load project data based on the params,
    // then in ProjectDetails, App, Footer, Nav, and anywhere that needs
    // the theme colors, I can easily use hook useLoaderData to load in
    // project details, which would include the theme colors
    // COULD ALSO have the loader function load just the theme colors
    // and have ProjectDetails just rely on the params for the project id
    // to then search for that project's details based on the id

    // https://reactrouter.com/en/main/hooks/use-loader-data
    const [condense, setCondense] = useState(false);
    const [windowSize, setWindowSize] = useState(getWindowSize);
    useLayoutEffect(() => {
        const handleResize = () => setWindowSize(getWindowSize);
        window.addEventListener('resize', handleResize);
        return () =>
            window.removeEventListener('resize', handleResize);
    });
    useLayoutEffect(() => {
        setCondense(windowSize.innerWidth < 624);
    }, [windowSize]);
    const { fill, accentFill, opacity, ...logoStyle } = useSpring({
        to: {
            scale: hovering ? scalar : 1,
            fill: isHome ? "#155243" : location.state?.theme.primary,
            accentFill: isHome ? "#0c7a6e" : location.state?.theme.primary,
            opacity: isHome ? 0.62 : 0.38,
        }
    });
    const transition = useTransition(isHome, {
        from: () => !isDefault && {
            opacity: 0,
            x: -144,
        },
        enter: {
            opacity: 1,
            x: 0,
        },
        leave: () => !isDefault && {
            opacity: 0,
            x: -144,
        },
    })
    const scrollToTop = () => {
        if (isHome) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
        else if (isDefault) {
            navigate("/")
        }
        else {
            navigate(-1);
        }
    };

    return (
        <NavWrapper condense={condense}>
            <animated.div
                className="logo-container"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={scrollToTop}
                style={logoStyle}>
                <Brandmark className="brandmark"
                    style={{
                        fill: fill,
                        opacity: opacity,
                    }}
                    accentStyle={{ fill: accentFill }} />
                {!condense && transition((style, content) => (
                    content &&
                    <animated.div style={style}>
                        <Logotype className="logotype" style={{ fill: fill }} />
                    </animated.div>
                ))}
            </animated.div>
            <SocialsList />
        </NavWrapper>
    );
};

const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export default Nav;