import React from 'react';

import '../../css/Results.css';
import Welcome from '../Header/Welcome.tsx';
import ResultsTable from './ResultsTable.tsx';

function Results({resultsList}) {
  return (
    <section className='dashboard-container'>
      <Welcome title='Results' description='This is where you will see the results of your searches for test results. You can filter these results by clicking on the controls below.' />
      <ResultsTable resultsList={resultsList} />
    </section>

  );
}

export default Results;
