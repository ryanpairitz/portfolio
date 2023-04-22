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

const Components = () => {
    const { state } = useLocation();
    return (
        <div className="App" style={{
            backgroundColor: state?.theme.neutral
        }}>
            <Nav />
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