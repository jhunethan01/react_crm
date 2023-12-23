import React from 'react';
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
  return (
    <section className='dashboard_container'>
      <BrowserRouter>
        <Navigation />
        <FlexVertical>
          <Header />
          <Routes>
            <Route path='/' element={<Overview />}></Route>
            <Route path='/customers' element={<Customers />}></Route>
            <Route path='/results' element={<Results />}></Route>
            <Route path='/account' element={<Accounts />}></Route>
          </Routes>
        </FlexVertical>
      </BrowserRouter>
    </section>
  );
}

export default Dashboard;
