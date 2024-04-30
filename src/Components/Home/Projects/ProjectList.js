import { animated, useChain, useSpring, useSpringRef, useTransition } from "@react-spring/web";
import { useEffect, useMemo, useState } from "react";
import useMeasure from "react-use-measure";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import ProjectPreview from "./ProjectPreview";

function useMedia(queries, values, defaultValue) {
    const match = () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue;
    const [value, setValue] = useState(match);
    useEffect(() => {
        const handler = () => setValue(match);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
        // eslint-disable-next-line
    }, []);
    return value;
}

const ProjectsList = ({ projectList }) => {
    // tie media queries to the number of columns
    const columns = useMedia(['(min-width: 2000px)', '(min-width: 1500px)', '(min-width: 1078px)'], [4, 3, 2], 1);
    // measure the width of the container element
    const [ref, { width }] = useMeasure();
    // form a grid of stacked items using width & column count
    const [heights, gridItems] = useMemo(() => {
        let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
        let gridItems = projectList.map((project, i) => {
            const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
            const x = (width / columns) * column; // x = container width / number of columns * column index,
            const y = (heights[column] += project.height) - project.height; // y = it's just the height of the current column
            const noPaddingLeft = column % (columns) === 0 || columns == 1;
            return { ...project, column, noPaddingLeft, x, y, width: width / columns, height: project.height };
        });
        return [heights, gridItems];
    }, [columns, projectList, width]);
    const transRef = useSpringRef();
    // turn the static grid values into animated transitions, any addition, removal or change will be animated
    const transitions = useTransition(gridItems, {
        ref: transRef,
        key: (project) => project.id, // for some reason this causes widths and x&y to animate; otherwise, can see destruct of each before mount, unless remove leave opt below
        from: { opacity: 0, scale: 1.382 },
        enter: { opacity: 1, scale: 1 },
        update: ({ x, y, width, height }) => ({ x, y, width, height }),
        leave: { scale: 0, opacity: 0 },
        config: { mass: 3, tension: 610, friction: 144 },
        trail: (377 + 144) / gridItems.length,
    });
    const springRef = useSpringRef();
    const springStyle = useSpring({
        ref: springRef,
        from: {
            opacity: 0,
            y: -144,
        },
        to: {
            opacity: 1,
            y: 0,
        }
    });
    useChain([transRef, springRef], [0, 1], 377);

    return (
        <div ref={ref} className="normal list" style={{ height: Math.max(...heights) }}>
            {transitions((style, project) => (
                <animated.div style={{
                    ...style, width: project.width, height: project.height, x: project.x, y: project.y,
                    paddingLeft: project.noPaddingLeft && "0px",
                    paddingRight: "0px"
                }}>
                    <ProjectCard project={project} />
                    <ProjectPreview to={`/project/${project.id}`} cta={project.link?.label}
                        style={springStyle}>{project.description}</ProjectPreview>
                </animated.div>
            ))}
        </div>
    );
};

export default ProjectsList;