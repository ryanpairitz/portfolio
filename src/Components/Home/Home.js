import { useState, useEffect } from "react";
import Header from "./Header/Header";
import { Outlet, useLocation } from "react-router-dom";

const initFilters = {
    frontenddev: false,
    graphicdesign: false,
    uiuxdesign: false,
    animation: false
};

const Home = ({ filters, onClickHandler }) => {
    const location = useLocation();
    const [filterList, setFilterList] = useState([]);
    useEffect(() => {
        const tempFilterList = Object.keys(filters).filter(
            filter => filters[filter]
        ).map(filter => {
            filter = filter.replace("graphicdesign", "graphic design");
            filter = filter.replace("uiuxdesign", "ui/ux design");
            filter = filter.replace("frontenddev", "frontend dev");
            return filter;
        });
        setFilterList(tempFilterList);
    }, [filters]);

    return (
        <div className="content">
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