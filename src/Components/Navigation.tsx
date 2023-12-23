import React from 'react';

import '../css/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faPerson, faSquarePollVertical, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <section className="navigation_container">
            <div className="navigation_logo">Demo</div>
            <Link to="/">
                <div className="tab_link">
                    <FontAwesomeIcon icon={faHouse} />
                    <span>
                        Home
                    </span>
                </div>
            </Link>
            <Link to="/customers">
                <div className="tab_link">
                    <FontAwesomeIcon icon={faPerson} />
                    <span>
                        Customers
                    </span>
                </div>
            </Link>
            <Link to="/results">
                <div className="tab_link">
                    <FontAwesomeIcon icon={faSquarePollVertical} />
                    <span>
                        Results
                    </span>
                </div>
            </Link>
            <Link to="/account">
                <div className="tab_link">
                    <FontAwesomeIcon icon={faUser} />
                    <span>
                        Account
                    </span>
                </div>
            </Link>

        </section>
    );
}

export default Navigation;
