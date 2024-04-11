import React from 'react';
import '../../css/Overview.css';

import Chart from "./Chart.tsx";
import ResultsHistory from "../Dashboard/ResultsHistory.tsx";
import Statistic from './Statistic.tsx';
import Welcome from '../Header/Welcome.tsx';

function Overview({ customerList, resultsList }) {

  const dateFrequencyMap = {};

  for (const obj of resultsList) {
    const date = obj.date.slice(0, 10); 
    if (!dateFrequencyMap[date]) dateFrequencyMap[date] = 1;
    else dateFrequencyMap[date]++;
  }

  const dataX = [...Object.keys(dateFrequencyMap)]; 
  const dataY = [...Object.values(dateFrequencyMap)]; 

  return (
    <section className='dashboard-container'>
      <Welcome title={'Overview'} description={'Welcome to the dashboard! Here you can view important information about your account and manage your tasks. To get started, select a tab to the left.'} />
      <div className="dashboard_statistic-container">
        <Statistic title={'Number of Customers'} number={customerList.length} />
        <Statistic title={'Total Courses Completed'} number={resultsList.length} />
        <div className='line-break' />
        <ResultsHistory results={resultsList} />
        <Chart dataX={dataX} dataY={dataY} />
      </div>
    </section>
  );
}

export default Overview;
