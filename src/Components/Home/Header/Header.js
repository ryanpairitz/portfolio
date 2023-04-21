import LogoAnimation from "./LogoAnimation";
import Background from "./Background";
import HeaderTabs from "./HeaderTabs";
import HeaderFilters from "./HeaderFilters";

const Header = ({ filters, onClickHandler }) => {
    return (
        <div className="header-container">
            <LogoAnimation />
            <Background className="header-background" />
            <div className="header-content">
                <div className="hero">
                    <h1 className="title">ryan pairitz</h1>
                    <h2 className="subtitle">/ pair - its&nbsp;<span>&#129436;</span>&nbsp;/</h2>
                    <HeaderFilters filters={filters} 
                        onClickHandler={onClickHandler} />
                </div>

                <HeaderTabs />
            </div>
        </div>
    );
};

export default Header;