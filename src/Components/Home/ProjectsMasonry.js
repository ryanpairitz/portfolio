import { animated, useTransition } from "@react-spring/web";
import { useEffect, useMemo, useState } from "react";
import useMeasure from "react-use-measure";
import "./Projects.css";

function useMedia(queries, values, defaultValue) {
    const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue;
    const [value, setValue] = useState(match);
    useEffect(() => {
        const handler = () => setValue(match);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);
    return value;
}

const ProjectsMasonry = ({ projectList }) => {
    // tie media queries to the number of columns
    const columns = useMedia(['(min-width: 2000px)', '(min-width: 1500px)', '(min-width: 1000px)'], [4, 3, 2], 1);
    // Hook2: Measure the width of the container element
    const [ref, { width }] = useMeasure();
    // form a grid of stacked items using width & columns we got from hooks 1 & 2
    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
        let gridItems = projectList.map((project, i) => {
            const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
            const x = (width / columns) * column; // x = container width / number of columns * column index,
            const y = (heights[column] += project.height / 2) - project.height / 2; // y = it's just the height of the current column
            return { ...project, x, y, width: width / columns, height: project.height / 2 };
        });
        return [heights, gridItems];
    }, [columns, projectList, width]);
    // turn the static grid values into animated transitions, any addition, removal or change will be animated
    const transitions = useTransition(gridItems, {
        key: (project) => project.id,
        from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
        enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
        update: ({ x, y, width, height }) => ({ x, y, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25,
    });

    return (
        <div ref={ref} className="list" style={{ height: Math.max(...heights) }}>
            {transitions((style, project) => (
                <animated.div style={style}>
                    <div>{project.title}</div>
                    {/* <div style={{ backgroundImage: `url(${project.css}?auto=compress&dpr=2&h=500&w=500)` }} /> */}
                    {/* replace the above with svg? or do something similar to header bg logo animation */}
                </animated.div>
            ))}
        </div>
    );
};

export default ProjectsMasonry;