import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../../css/ViewCustomer.css';
import ResultsHistory from '../Dashboard/ResultsHistory.tsx';
import moment from 'moment';

function ViewCustomer() {
    const [results, setResults] = useState();
    const { customer_id } = useParams();

    const [customer, setCustomer] = useState<Customer>({
        id: 0,
        first_name: 'not set',
        last_name: 'not set',
        email: 'not set',
        number_courses_completed: 0,
        created: 'not set',
    });

    interface Customer {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        number_courses_completed: number;
        created: string;
    }

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await fetch('https://nodejs-crm.vercel.app/customer/' + customer_id);
                const data = await response.json();
                setCustomer(data.customer);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCustomer();
    }, [customer_id]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch('https://nodejs-crm.vercel.app/results?userId=' + customer_id);
                const data = await response.json();
                setResults(data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchResults();
    }, [customer_id]);

    return (
        <section className='dashboard-container'>
            <h1 className='tab-title'>
                View Customer - {customer.first_name} {customer.last_name}
            </h1>
            <p>
                Here you can view a customer's details and recent activity.
            </p>

            <table className='striped-table'>
                <tbody>
                    <tr>
                        <td>
                            First Name
                        </td>
                        <td>
                            {customer.first_name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name
                        </td>
                        <td>
                            {customer.last_name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email
                        </td>
                        <td>
                            {customer.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Number Of Courses Completed
                        </td>
                        <td>
                            {customer.number_courses_completed}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Account Created
                        </td>
                        <td>
                            {moment(customer.created, 'YYYY-MM-DD').format('DD MMMM YYYY')}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='line-break'></div>
            {results ? <ResultsHistory results={results} /> : null}

        </section>
    );
}

export default ViewCustomer;
