import React from 'react';

import '../css/Overview.css';

function Overview({customerList, resultsList}) {
  
  return (
    <section className='dashboard-container'>
      <h1 className='tab-title'>
        Dashboard
      </h1>
      <p>
        Welcome to the dashboard! Here you can view important information about your account and manage your tasks. To get started, select a tab to the left.
      </p>

      <div className="dashboard_statistic-container">
        <div className="dashboard_statistic">
          {/* variable width */}
          {/* variable type */}
          <h3>
            Number of Customers
          </h3>
          <p className='dashboard_statistic-number'>
            {customerList.customers.length}
          </p>
          <button>See Customers</button>
          hover and goes pink saying see customer overlay?
        </div>
        <div className="dashboard_statistic">
          <h3>
            Total Courses Completed
          </h3>
          <p>statistic</p>
        </div>
        <div className="dashboard_statistic">
          <h3>
            Title
          </h3>
          <p>statistic</p>
        </div>
        <div className="dashboard_statistic">
          <h3>
            Title
          </h3>
          <p>statistic</p>
        </div>
      </div>
    </section>
  );
}

export default Overview;
