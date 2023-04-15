import LogoAnimation from "./LogoAnimation";
import AnimatedNavLink from "./AnimatedNavLink";
import Background from "./Background";
import AnimatedButton from "./AnimatedButton";

const Header = ({ filters, onClickHandler }) => {
    const FilterList = [
        "frontend-dev",
        "graphic-design",
        "animation"
    ];
    return (
        <div className="header-container">
            <LogoAnimation />
            <Background className="header-background" />
            <div className="header-content">
                <div className="hero">
                    <h1 className="title">ryan pairitz</h1>
                    <h2 className="subtitle">/ pair - its&nbsp;<span>&#129436;</span>&nbsp;/</h2>
                    <h3 className="filters">
                        {FilterList.map((filter, index) => {
                            const id = filter.replace('-', '');
                            return (
                                <span
                                    key={index}>
                                    <AnimatedButton 
                                        id={id}
                                        className="filter"
                                        active={filters[id]}
                                        onClickHandler={onClickHandler}>
                                        {filter.replace('-', ' ')}
                                    </AnimatedButton>
                                    {index + 1 !== FilterList.length &&
                                        <>
                                            <p>&nbsp;</p>
                                            <span className="separator">&bull;</span>
                                            <p>&nbsp;</p>
                                        </>
                                    }
                                </span>
                            );
                        })}
                    </h3>
                </div>

                <nav>
                    <AnimatedNavLink to="/">
                        projects
                    </AnimatedNavLink>
                    <AnimatedNavLink to="personal">
                        personal
                    </AnimatedNavLink>
                    <AnimatedNavLink to="about">
                        about
                    </AnimatedNavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;