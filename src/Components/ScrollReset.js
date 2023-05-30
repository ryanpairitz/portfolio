import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollReset = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    if (pathname.includes('project'))
        window.scrollTo(0, 0);
  }, [pathname]);
}

export default ScrollReset;