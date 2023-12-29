import React from 'react';
import moment from 'moment';

import '../css/ResultsHistory.css';

function ResultsHistory({results}) {
  interface Result {
    course_id: number;
    user_id: number;
    score: number;
    date: string;
  }

  return (
    <section className='history-container'>
      <table className='striped-table'>
        <thead>
          <tr>
            <td className='tab-title'>
              Recent Results
            </td>
          </tr>

        </thead>
        <tbody>
        {results.slice(0,8).map((result: Result,index) => (
            <tr key={index}>
                <td className='history-record'>
                    <p className='history-subtitle'>
                        {moment(result.date).format(("Do MMMM YYYY"))}<br />
                    </p>
                    {result.name} completed course {result.course_id} with score: {result.score} 
                </td>
            </tr>
          ))}
        </tbody>

      </table>

    </section>

  );
}

export default ResultsHistory;
