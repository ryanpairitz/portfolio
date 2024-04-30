import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Outlet />
        </div>
    );
};

export default Home;