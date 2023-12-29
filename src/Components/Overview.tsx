import React from 'react';
import '../css/Overview.css';

import Chart from "./Chart.tsx";
import ResultsHistory from "./ResultsHistory.tsx";

function Overview({ customerList, resultsList }) {

  const dateFrequencyMap = {};

  for (const obj of resultsList.results) {
    const date = obj.date.slice(0, 10); 
    if (!dateFrequencyMap[date]) dateFrequencyMap[date] = 1;
    else dateFrequencyMap[date]++;
  }

  const dataX = [...Object.keys(dateFrequencyMap)]; 
  const dataY = [...Object.values(dateFrequencyMap)]; 

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
        </div>
        <div className="dashboard_statistic">
          <h3>
            Total Courses Completed
          </h3>
          <p className='dashboard_statistic-number'>
            {resultsList.results.length}
          </p>
        </div>
        <div className='line-break' />
        <ResultsHistory results={resultsList.results} />
        <Chart dataX={dataX} dataY={dataY} />
      </div>
    </section>
  );
}

export default Overview;
