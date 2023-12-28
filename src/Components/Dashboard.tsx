import React, { useState ,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../css/Dashboard.css';
import Navigation from "./Navigation.tsx";
import Customers from "./Customers.tsx";
import Results from "./Results.tsx";
import Accounts from "./Accounts.tsx";
import Header from "./Header.tsx";
import FlexVertical from "./FlexVertical.tsx";
import Overview from "./Overview.tsx";

function Dashboard() {
  interface Customer {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    number_courses_completed: number;
    created: string;
  }
  

  interface Result {
    course_id: number;
    user_id: number;
    score: number;
    date: string;
  }

  interface ResultsList {
    results: Result[];
  }
  
  interface CustomerList {
    customers: Customer[]; // Enforce that the array elements are of type Customer
  }

  const [customerList, setCustomerList] = useState<CustomerList>({ customers: [] });
  const [resultsList, setResultsList] = useState<ResultsList>({ results: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('https://nodejs-crm-ca3cef4f2948.herokuapp.com/customers');
        const data = await response.json();
        console.log(response);
        setCustomerList(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomers();
  }, []); 

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('https://nodejs-crm-ca3cef4f2948.herokuapp.com/results');
        const data = await response.json();
        console.log('results',response);
        setResultsList(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []); 

  return (
    <section className='dashboard_container'>
      <BrowserRouter>
        <Navigation />
        <FlexVertical>
          <Header />
          <Routes>
            <Route path='/' element={<Overview customerList={customerList} resultsList={resultsList} />}></Route>
            <Route path='/customers' element={<Customers customerList={customerList} />}></Route>
            <Route path='/results' element={<Results resultsList={resultsList} />}></Route>
            <Route path='/account' element={<Accounts />}></Route>
          </Routes>
        </FlexVertical>
      </BrowserRouter>
    </section>
  );
}

export default Dashboard;
