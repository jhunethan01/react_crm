import React from 'react';

import '../../css/Customers.css';
import Welcome from '../Header/Welcome.tsx';
import CustomersTable from './CustomersTable.tsx';

function Customers() {
  return (
    <section className='dashboard-container'>
      <Welcome title={'Customers'} description={'Here you can view and manage all customers in the system. You can add new customers, edit existing ones or delete them if necessary.'} />
      <CustomersTable />
    </section>
  );
}

export default Customers;
