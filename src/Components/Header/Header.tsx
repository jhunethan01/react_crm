import React from 'react';

import "../../css/Header.css";
import Breadcrumbs from './Breadcrumbs.tsx';
import UserGreeting from './UserGreeting.tsx';

function Header() {

  return (
    <header>
      <div className="header-container">
        <Breadcrumbs />
        <UserGreeting />
      </div>
    </header>

  );
}

<style></style>

export default Header;
