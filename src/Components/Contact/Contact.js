import EmailButton from "./EmailButton";
import "./Contact.css";

const Contact = () => {
    return (
        <p className="line">
            <b>Want to talk? Reach out!</b>
            <EmailButton />
        </p>
    );
};

export default Contact;