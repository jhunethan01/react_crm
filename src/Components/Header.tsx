import React from 'react';
import { useLocation } from 'react-router-dom';

import "../css/Header.css";

function Header() {
  const { pathname } = useLocation();
  const breadcrumbs = pathname.split('/').filter(path => path); // Remove empty path segments

  return (
    <header>
      <div className="container">
        <ul className="breadcrumbs">
          <a href="/" className="breadcrumbs-item">
            <li>Dashboard</li>
          </a>
          {breadcrumbs.map((crumb, index) => (
            <a key={index} href={crumb} className="breadcrumbs-item">
              <li>
                {index === breadcrumbs.length - 1 ? crumb : <a href={`/${breadcrumbs.slice(0, index + 1).join('/')}`}>{crumb}</a>}
              </li>
            </a>
          ))}
        </ul>

        <ul className="user-menu">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </header>

  );
}

<style></style>

export default Header;
