import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../../css/Dashboard.css';
import Navigation from "./Navigation.tsx";
import Customers from "../Customers/Customers.tsx";
import Results from "../Results/Results.tsx";
import Header from "../Header/Header.tsx";
import FlexVertical from "../Header/FlexVertical.tsx";
import Overview from "../Overview/Overview.tsx";
import ViewCustomer from '../Customers/ViewCustomer.tsx';

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
  name: string;
}

type ResultsList = Result[];

type CustomerList = Customer[];

export const CustomerContext = createContext<{customerList: CustomerList, setCustomerList, resultsList: ResultsList, setResultsList} | {customerList: [], resultsList: []}>({customerList: [], resultsList: []})

function Dashboard() {
  const [customerList, setCustomerList] = useState<CustomerList>([]);
  const [resultsList, setResultsList] = useState<ResultsList>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('https://nodejs-crm.vercel.app/customers');
        const data = await response.json();
        setCustomerList(data.customers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCustomers();
  }, []);

  function sortByDate(arr) {
    return arr.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('https://nodejs-crm.vercel.app/results');
        const data = await response.json();
        data.results = sortByDate(data.results);
        data.results.map((result) => {
          const matchingCustomer = customerList?.find((cust) => cust.id === result.user_id);
          if (matchingCustomer) {
            result['name'] = matchingCustomer.first_name + ' ' + matchingCustomer.last_name;
          }
          return true;
        });

        setResultsList(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResults();
  }, [customerList]);

  return (
    <section className='dashboard_container'>
      <CustomerContext.Provider value={{customerList, setCustomerList,resultsList,setResultsList}}>
        <BrowserRouter>
          <Navigation />
          <FlexVertical>
            <Header />
            <Routes>
              <Route path='/' element={<Overview customerList={customerList} resultsList={resultsList} />}></Route>
              <Route path='/customers' element={<Customers />}></Route>
              <Route path='/results' element={<Results resultsList={resultsList} />}></Route>
              <Route path='/customers/:customer_id' element={<ViewCustomer />}></Route>
            </Routes>
          </FlexVertical>
        </BrowserRouter>
      </CustomerContext.Provider>
    </section>
  );
}

export default Dashboard;
