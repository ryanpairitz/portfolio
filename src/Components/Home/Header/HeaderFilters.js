import AnimatedButton from "../../AnimatedButton";

const FilterList = [
    "graphic-design",
    "ui/ux-design",
    "frontend-dev",
    "animation"
];

const HeaderFilters = ({ filters, onClickHandler }) => {
    return (
        <h3 className="filters">
            {FilterList.map((filter, index) => {
                const id = filter.replace(/-|\//g, '');
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
    );
};

export default HeaderFilters;