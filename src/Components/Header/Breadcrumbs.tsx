import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const { pathname } = useLocation();
    const breadcrumbs = pathname.split('/').filter(path => path);

    return (
        // JSX code for your Breadcrumbs component
        <ul className="breadcrumbs">
          <Link to='/'>
            <li className='breadcrumbs-item'>
              Dashboard
            </li>
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <Link key={index} to={crumb}>
              <li className='breadcrumbs-item'>
                {index === breadcrumbs.length - 1 ? crumb : crumb.charAt(0).toUpperCase() + crumb.slice(1)}
              </li>
            </Link>
          ))}
        </ul>
    );
};

export default Breadcrumbs;