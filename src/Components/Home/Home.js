import { useState, useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import HomeBar from "./HomeBar";

const initialFilters = {
    frontendDev: false,
    graphicDesign: false,
    animation: false
};

const Home = () => {
    const [filters, setFilters] = useState(initialFilters);

    useEffect(() => {
        const allFiltersAreSelected = Object.values(filters).every(
            value => value === true
        );

        if ( allFiltersAreSelected ) {
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

    return (
        <div className="home-container">
            <HomeBar />
            <Header filters={filters} onClickHandler={onClickHandler}/>
            <Outlet context={filters}/>
        </div>
    );
};

export default Home;