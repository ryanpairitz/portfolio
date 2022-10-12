import { NavLink } from "react-router-dom";
import LogoAnimation from "./LogoAnimation";

const Header = ({ filters, onClickHandler }) => {
    const activeLinkClass = "nav-link active-link";
    const inactiveLinkClass = "nav-link";

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logo-container">
                    <LogoAnimation />
                </div>
                <h1 className="title">ryan pairitz</h1>
                <h2 className="subtitle">/ pair - its &#129436; /</h2>
                <h3 className="filters">
                    <span
                        id="uiDesign"
                        onClick={onClickHandler}
                        className={
                            filters["uiDesign"] ? "filter-active filter" : "filter"
                        }>
                        ui/ux design
                    </span> | <span
                        id="frontendDev"
                        onClick={onClickHandler}
                        className={
                            filters["frontendDev"] ? "filter-active filter" : "filter"
                        }>
                        frontend dev
                    </span> | <span
                        id="graphicDesign"
                        onClick={onClickHandler}
                        className={
                            filters["graphicDesign"] ? "filter-active filter" : "filter"
                        }>
                        graphic design
                    </span> | <span
                        id="animation"
                        onClick={onClickHandler}
                        className={
                            filters["animation"] ? "filter-active filter" : "filter"
                        }>
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
                    projects
                </NavLink>
                <NavLink
                    to="personal"
                    className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                    }>
                    personal
                </NavLink>
                <NavLink
                    to="about"
                    className={({ isActive }) =>
                        isActive ? activeLinkClass : inactiveLinkClass
                    }>
                    about
                </NavLink>
            </nav>
        </div>
    );
};

export default Header;