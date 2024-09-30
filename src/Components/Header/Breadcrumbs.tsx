import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const { pathname } = useLocation();
    const breadcrumbs = pathname.split('/').filter(path => path);

    return (
        // JSX code for your Breadcrumbs component
        <ul className="breadcrumbs">
          {breadcrumbs.length > 0 ? <Link to='/'>Dashboard</Link> : null}
          {breadcrumbs.map((crumb, index) => (
            <>
              <span>/</span>
                  {crumb.charAt(0).toUpperCase() + crumb.slice(1)}
            </>
          ))}
        </ul>
    );
};

export default Breadcrumbs;