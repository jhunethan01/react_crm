import React from 'react';

import '../../css/Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHouse, faPerson, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { useLocation, Link } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    
    return (
        <section className="navigation_container">
            <div className="navigation_logo"><span>Demo</span></div>
            <Link to="/">
                <div className={`tab_link ${location.pathname === '/' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHouse} />
                    <span>
                        Home
                    </span>
                </div>
            </Link>
            <Link to="/customers">
                <div className={`tab_link ${location.pathname === '/customers' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faPerson} />
                    <span>
                        Customers
                    </span>
                </div>
            </Link>
            <Link to="/results">
                <div className={`tab_link ${location.pathname === '/results' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faSquarePollVertical} />
                    <span>
                        Results
                    </span>
                </div>
            </Link>
        </section>
    );
}

export default Navigation;