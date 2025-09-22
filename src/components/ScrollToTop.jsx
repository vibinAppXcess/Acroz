
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top on route change
//   }, [pathname]);

//   return null;
// };

// export default ScrollToTop;






import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
};

export default ScrollToTop;
