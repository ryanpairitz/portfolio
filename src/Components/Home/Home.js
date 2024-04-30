import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="projects">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;