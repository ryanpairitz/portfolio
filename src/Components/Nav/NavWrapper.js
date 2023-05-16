import { useLocation } from "react-router-dom";

const NavWrapper = ({ condense, children }) => {
    const { state } = useLocation();
    return (
        condense ?
            <div className="nav-wrapper"
                style={{
                    backgroundColor: state?.theme.neutral ? state?.theme.neutral : "#001412"
                }}>
                {children}
            </div>
            :
            <>
                {children}
            </>
    );
};

export default NavWrapper;