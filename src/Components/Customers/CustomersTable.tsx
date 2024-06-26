

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CustomerContext } from '../Dashboard/Dashboard.tsx';

function CustomersTable() {
    interface Customer {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        number_courses_completed: number;
        created: string;
    }

    const context = useContext(CustomerContext);
    return (
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
                {context.customerList.map((customer: Customer, index) => (
                    <tr key={index}>
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
    );
}

export default CustomersTable;
