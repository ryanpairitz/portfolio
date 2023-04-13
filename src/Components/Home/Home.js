import { useState, useEffect } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import HomeBar from "./HomeBar";
import Brandmark from "./Brandmark";
import Logotype from "./Logotype";
import { animated, useSpring } from "react-spring";
import IconTwitter from "../img/IconTwitter";
import IconInstagram from "../img/IconInstagram";
import IconLinkedIn from "../img/IconLinkedIn";
import IconTikTok from "../img/IconTikTok";
import IconGithub from "../img/IconGithub";

const initialFilters = {
    frontenddev: false,
    graphicdesign: false,
    animation: false
};

const Home = () => {
    const scalar = 1.0557;
    const location = useLocation();
    const [filters, setFilters] = useState(initialFilters);
    const [hovering, setHovering] = useState(false);
    const logoStyle = useSpring({
        from: {
            scale: hovering ? 1 : scalar
        },
        to: {
            scale: hovering ? scalar : 1
        }
    });

    useEffect(() => {
        const allFiltersAreSelected = Object.values(filters).every(
            value => value === true
        );

        if (allFiltersAreSelected) {
            // disable all filters
            setFilters(initialFilters);
        };
    }, [filters]);

    const onClickHandler = (e) => {
        // toggle the selected filter
        setFilters({
            ...filters,
            [e.target.id]: !filters[e.target.id]
        })
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {/* <HomeBar /> */}
            <animated.div className="logo-container"
                onMouseEnter={() => setHovering(!hovering)}
                onMouseLeave={() => setHovering(false)}
                onClick={scrollToTop}
                style={logoStyle}>
                <Brandmark className="brandmark" />
                <Logotype className="logotype" />
            </animated.div>
            <div className="icons-container">
                <a href="https://twitter.com/ryanparrots"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconTwitter className="icon" />
                </a>
                <a href="https://www.instagram.com/ryanpairitz/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconInstagram className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/ryan-pairitz-462440222/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconLinkedIn className="icon" />
                </a>
                <a href="https://www.tiktok.com/@ryanpairitz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconTikTok className="icon icon-tiktok" />
                </a>
                <a href="https://github.com/ryanpairitz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconGithub className="icon" />
                </a>
            </div>
            <div className={location.pathname === "/about" && "header-wrapper"}>
                <Header filters={filters} onClickHandler={onClickHandler} />
            </div>
            <div className={location.pathname === "/about" ? "view-container view-container-alt" : "view-container"}>
                <Outlet context={filters} />
            </div>
        </div>
    );
};

export default Home;