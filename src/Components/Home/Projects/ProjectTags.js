const ProjectTags = ({ tags, color, backgroundColor }) => {
    return (
        <ul className="tags">
            {tags.map((tag, index) => (
                <li key={index} style={{
                    // background: backgroundColor,
                    color: color,
                }}>
                    {tag}
                </li>
            ))}
        </ul>
    );
};

export default ProjectTags;