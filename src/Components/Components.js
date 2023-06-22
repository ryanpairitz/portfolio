import {
    Route,
    Routes,
    useLocation
} from "react-router-dom";
import Footer from "./Footer";
import About from "./Home/About/About";
import Home from "./Home/Home";
import ProjectDetails from "./Home/Projects/ProjectDetails";
import Projects from "./Home/Projects/Projects";
import NotFound from "./NotFound";
import Nav from "./Nav/Nav";
import { useLayoutEffect, useState } from "react";
import ScrollReset from "./ScrollReset";

const initFilters = {
    frontenddev: false,
    graphicdesign: false,
    uiuxdesign: false,
    animation: false
};

const Components = () => {
    const { state } = useLocation();
    const [filters, setFilters] = useState(initFilters);
    const onClickHandler = (e) => {
        // toggle the selected filter
        setFilters({
            ...filters,
            [e.currentTarget.id]: !filters[e.currentTarget.id]
            // must use currentTarget vs. target, so if any child
            // of the filter buttons are clicked (including the underline),
            // the associated filter will be set/unset
        })
    };
    useLayoutEffect(() => {
        // update background color to match theme
        document.body.style.backgroundColor = state?.theme.raisedNeutral ? state?.theme.raisedNeutral : "#0e1314";
        // update text highlight color to match theme
        var highlightColor = state?.theme.primary ? state?.theme.primary : "rgba(221,70,35,0.382)";
        var css = '::selection { background: ' + highlightColor + '; } ::-webkit-selection { background: ' + highlightColor + '; } ::-moz-selection { background: ' + highlightColor + '; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }, [state]);

    return (
        <div className="App" style={{
            backgroundColor: state?.theme.raisedNeutral
        }}>
            <ScrollReset />
            <Nav />
            <Routes>
                <Route path="/" element={<Home
                    filters={filters}
                    onClickHandler={onClickHandler} />
                }>
                    <Route index element={<Projects />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="personal" element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default Components;