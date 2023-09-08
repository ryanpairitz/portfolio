import EmailButton from "./EmailButton";
import "./Contact.css";
import AnimatedP from "../AnimatedP";
import { useLocation } from "react-router-dom";

const Contact = ({ color }) => {
    const { pathname } = useLocation();

    return (
        <div className="line-container">
            <AnimatedP className="line" style={{
                backgroundColor: pathname !== "/about" && "#101111"
            }}>
                <b>Want to talk? Reach out:</b>
                <EmailButton color={color} />
            </AnimatedP>
        </div>
    );
};

export default Contact;