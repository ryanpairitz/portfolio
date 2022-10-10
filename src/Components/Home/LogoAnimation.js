import {
    useEffect,
    useRef
} from 'react';
import lottie from 'lottie-web';
import logoAnimData from './rp-logo-animation-data.json';

const LogoAnimation = () => {
    const logoContainer = useRef(null);
    const logo = useRef(null);

    useEffect(() => {
        if (logoContainer.current){
            logo.current = lottie.loadAnimation({
                container: logoContainer.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: logoAnimData,
            });

            return () => {
                logo.current?.destroy();
            }
        }
    }, []);

    return (
        <span 
            ref={logoContainer}
            className='header-logo'
        />
    );
};

export default LogoAnimation;