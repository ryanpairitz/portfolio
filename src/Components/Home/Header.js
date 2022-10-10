import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoAnimation from "./LogoAnimation";

const Header = () => {
    const activeLinkClass = "nav-link active-link";
    const inactiveLinkClass = "nav-link";

    const [filterByUI, setFilterByUI] = useState(false);
    const [filterByDev, setFilterByDev] = useState(false);
    const [filterByDesign, setFilterByDesign] = useState(false);
    const [filterByAnim, setFilterByAnim] = useState(false);

    useEffect(() => {
        console.log('inside useEffect: check filters');
        if (filterByUI && filterByDev && filterByDesign && filterByAnim){
            setFilterByUI(false);
            setFilterByDev(false);
            setFilterByDesign(false);
            setFilterByAnim(false);
        }
    }, [filterByUI, filterByDev]);

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logo-container">
                    <LogoAnimation />
                </div>
                <h1 className="title">ryan pairitz</h1>
                <h2 className="subtitle">/ pairi - its &#129436; /</h2>
                <h3 className="filters">
                    <span
                        onClick={() => setFilterByUI(!filterByUI)}
                        className={filterByUI ? "filter-active filter" : "filter"}>
                        ui/ux design
                    </span> | <span
                        onClick={() => setFilterByDev(!filterByDev)}
                        className={filterByDev ? "filter-active filter" : "filter"}>
                        frontend dev
                    </span> | <span
                        onClick={() => setFilterByDesign(!filterByDesign)}
                        className={filterByDesign ? "filter-active filter" : "filter"}>
                        graphic design
                    </span> | <span
                        onClick={() => setFilterByAnim(!filterByAnim)}
                        className={filterByAnim ? "filter-active filter" : "filter"}>
                        animation
                    </span>
                </h3>
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                    }
                    end>
                    Projects
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                    }>
                    About
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;