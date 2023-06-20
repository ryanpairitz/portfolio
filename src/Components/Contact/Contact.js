import EmailButton from "./EmailButton";
import "./Contact.css";
import AnimatedP from "../AnimatedP";
import { useLocation } from "react-router-dom";

const Contact = () => {
    const { state } = useLocation();
    return (
        <div className="line-container">
            <AnimatedP className="line" style={{
                backgroundColor: state?.theme.raisedNeutral && state?.theme.raisedNeutral
            }}>
                <b>Want to talk? Reach out:</b>
                <EmailButton style={{
                    backgroundColor: state?.theme.primary && state?.theme.primary
                }} />
            </AnimatedP>
        </div>
    );
};

export default Contact;