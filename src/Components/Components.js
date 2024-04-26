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
import ScrollReset from "./ScrollReset";

const Components = () => {

    return (
        <div className="App">
            <ScrollReset />
            <Nav />
            <div className="content">
            <Routes>
                <Route path="/" element={<Home/>
                }>
                    <Route index element={<Projects />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="personal" element={<Projects />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="about" element={<About />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default Components;