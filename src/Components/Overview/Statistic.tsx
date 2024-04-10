import React from 'react';
import '../../css/Overview.css';


function Statistic({ title , number }) {

    return (
        <div className="dashboard_statistic">
            <h3>
                {title}
            </h3>
            <p className='dashboard_statistic-number'>
                {number}
            </p>
        </div>
    );
}

export default Statistic;
