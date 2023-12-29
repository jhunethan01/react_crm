import React from 'react';
import '../css/Overview.css';

import Chart from "./Chart.tsx";
import ResultsHistory from "./ResultsHistory.tsx";

function Overview({ customerList, resultsList }) {

  // Use a Map to store date and frequency count
  const dateFrequencyMap = {};

  // Iterate over objects and update map
  for (const obj of resultsList.results) {
    const date = obj.date.slice(0, 10); // Extract date portion (YYYY-MM-DD)
    if (!dateFrequencyMap[date]) dateFrequencyMap[date] = 1;
    else dateFrequencyMap[date]++;
  }

  // Extract data for dataX and dataY from the map
  const dataX = [...Object.keys(dateFrequencyMap)]; // Dates
  const dataY = [...Object.values(dateFrequencyMap)]; // Frequencies

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
          hover and goes pink saying see customer overlay?
        </div>
        <div className="dashboard_statistic">
          <h3>
            Total Courses Completed
          </h3>
          <p className='dashboard_statistic-number'>
            {resultsList.results.length}
          </p>
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
        <div className='line-break' />
        <ResultsHistory results={resultsList.results} />
        <Chart dataX={dataX} dataY={dataY} />
      </div>
    </section>
  );
}

export default Overview;
