import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToLink = ({ to, children, offset = -64, ...props }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: to } });
    } else {
      scroll.scrollTo(document.getElementById(to).offsetTop + offset, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <Link to="/" {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollToLink;

// * I guess, this is the easiest solution that ensures both navigation and scrolling work properly.
// * The issue likely occurs, just like Stefano mentioned, because react-scroll works only within the current page by default and does not 
// * navigate between different routes. To fix this, I used a combination of react-router-dom and react-scroll to ensure that the page 
// * first navigates to the correct route and then scrolls to the desired section. Seems to work perfectly now.