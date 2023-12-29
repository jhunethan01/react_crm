import React, { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import '../css/Chart.css'

const Chart = ({ dataX, dataY }) => {
    useEffect(() => {
        ChartJS.register(CategoryScale);
    }, []);

    const chartData = {
        labels: dataX,
        datasets: [
            {
                label: 'No of Results',
                data: dataY,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div className='chart-container'>
            <h2>Recent Results Activity</h2>
            <Line data={chartData} height='80px' />
        </div>
    );
};

export default Chart;
