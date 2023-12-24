import React from 'react';

import '../css/Customers.css';

function Customers() {
  return (
    <section className='dashboard-container'>
      <h1 className='tab-title'>
        Customers
      </h1>
      <p>
        Here you can view and manage all customers in the system. You can add new customers, edit existing ones or delete them if necessary.
      </p>

      <table className='striped-table'>
        <thead>
          <tr>
            <td>
              First Name
            </td>
            <td>
              Last Name
            </td>
            <td>
              Email
            </td>
            <td>
              Number of courses
            </td>
            <td>
              Created
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

export default Customers;
