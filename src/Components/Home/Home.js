import { useState, useEffect } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Brandmark from "./Brandmark";
import Logotype from "./Logotype";
import { animated, useSpring } from "@react-spring/web";
import SocialsList from "./SocialsList";

const initFilters = {
    frontenddev: false,
    graphicdesign: false,
    uiuxdesign: false,
    animation: false
};
const initFilterList = [
    "graphic design",
    "ui/ux design",
    "frontend dev",
    "animation",
];

const Home = () => {
    const scalar = 1.0557;
    const location = useLocation();
    const [filters, setFilters] = useState(initFilters);
    const [filterList, setFilterList] = useState(initFilterList);
    const [hovering, setHovering] = useState(false);
    const logoStyle = useSpring({
        to: {
            scale: hovering ? scalar : 1
        }
    });
    useEffect(() => {
        const allFiltersAreSelected = Object.values(filters).every(
            value => value === true
        ) || Object.values(filters).every(value => value === false);
        if (allFiltersAreSelected) {
            // disable/enable all filters
            setFilters(initFilters);
            setFilterList(initFilterList);
        }
        else {
            const tempFilterList = Object.keys(filters).filter(
                filter => filters[filter]
            ).map(filter => {
                filter = filter.replace("graphicdesign","graphic design");
                filter = filter.replace("uiuxdesign","ui/ux design");
                filter = filter.replace("frontenddev","frontend dev");
                return filter;
            });
            setFilterList(tempFilterList);
        }
    }, [filters]);

    const onClickHandler = (e) => {
        // toggle the selected filter
        setFilters({
            ...filters,
            [e.currentTarget.id]: !filters[e.currentTarget.id]
            // must use currentTarget vs. target, so if any child
            // of the filter buttons are clicked (including the underline),
            // the associated filter will be set/unset
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
            <animated.div className="logo-container"
                onMouseEnter={() => setHovering(!hovering)}
                onMouseLeave={() => setHovering(false)}
                onClick={scrollToTop}
                style={logoStyle}>
                <Brandmark className="brandmark" />
                <Logotype className="logotype" />
            </animated.div>
            <SocialsList />
            <div className={location.pathname === "/about" ? "header-wrapper" : undefined}>
                <Header filters={filters} onClickHandler={onClickHandler} />
            </div>
            <div className={location.pathname === "/about" ? "view-container view-container-alt" : "view-container"}>
                <Outlet context={filterList} />
            </div>
        </div>
    );
};

export default Home;