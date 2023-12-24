import React from 'react';

import '../css/Results.css';

function Results() {
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
              First Name
            </td>
            <td>
              Last Name
            </td>
            <td>
              Score
            </td>
            <td>
              Date Completed
            </td>
          </tr>

        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 4</td>
            <td>Data 5</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
            <td>Data 7</td>
            <td>Data 8</td>
          </tr>
        </tbody>

      </table>

    </section>

  );
}

export default Results;
