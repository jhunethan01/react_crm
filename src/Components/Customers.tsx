import React from 'react';

import '../css/Customers.css';

function Customers({ customerList }) {
  interface Customer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    number_courses_completed: number;
    created: string;
  }
  console.log('customers',customerList)
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
          {customerList.customers.map((customer: Customer) => (
            <tr>
                <td>{customer.first_name}</td>
                <td>{customer.last_name}</td>
                <td>{customer.email}</td>
                <td>{customer.number_courses_completed}</td>
                <td>{customer.created}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </section>
  );
}

export default Customers;
