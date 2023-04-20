import {
    Route,
    Routes
} from "react-router-dom";
import Footer from "./Footer";
import About from "./Home/About/About";
import Home from "./Home/Home";
import ProjectDetails from "./Home/ProjectDetails";
import Projects from "./Home/Projects";
import NotFound from "./NotFound";

const Components = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Projects />}/>
                    <Route path="projects" element={<Projects />}/>
                    <Route path="personal" element={<Projects />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="*" element={<NotFound />}/>
                </Route>
                <Route path="/project/:id" element={<ProjectDetails />}/>
            </Routes>
            <Footer />
        </div>
    );
};

export default Components;