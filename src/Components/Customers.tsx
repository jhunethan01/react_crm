import React from 'react';

import '../css/Customers.css';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
            <td>

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
                <td>{moment(customer.created).format('DD MMMM YYYY')}</td>
                <td>
                  <Link to={`/customers/${customer.id}`}>
                    <button className='customer-link'>View</button>
                  </Link>
                </td>
            </tr>
          ))}
        </tbody>

      </table>

    </section>
  );
}

export default Customers;
