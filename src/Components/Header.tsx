import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import "../css/Header.css";

function Header() {
  const { pathname } = useLocation();
  const breadcrumbs = pathname.split('/').filter(path => path); // Remove empty path segments

  return (
    <header>
      <div className="header-container">
        <ul className="breadcrumbs">
          <Link to='/'>
            <li className='breadcrumbs-item'>
              Dashboard
            </li>
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <Link key={index} to={crumb}>
              <li className='breadcrumbs-item'>
                {index === breadcrumbs.length - 1 ? crumb : <a href={`/${breadcrumbs.slice(0, index + 1).join('/')}`}>{crumb}</a>}
              </li>
            </Link>
          ))}
        </ul>

        <div className='header-greeting'>
          Hi, User
        </div>
      </div>
    </header>

  );
}

<style></style>

export default Header;
