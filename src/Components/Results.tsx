import React from 'react';

import '../css/Results.css';

function Results({resultsList}) {
  interface Result {
    course_id: number;
    user_id: number;
    score: number;
    date: string;
  }

  console.log(resultsList)

  return (
    <section className='dashboard-container'>
      <h1 className='tab-title'>
        Results
      </h1>
      <p>
        This is where you will see the results of your searches for test results. You can filter these results by clicking on the controls below.
      </p>

      <table className='striped-table'>
        <thead>
          <tr>
            <td>
              Course ID
            </td>
            <td>
              Customer ID
            </td>
            <td>
              Score
            </td>
            <td>
              Date Completed
            </td>
            <td>
              
            </td>
          </tr>

        </thead>
        <tbody>
        {resultsList.results.map((result: Result) => (
            <tr>
                <td>{result.course_id}</td>
                <td>{result.user_id}</td>
                <td>{result.score}</td>
                <td>{result.date}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </section>

  );
}

export default Results;
