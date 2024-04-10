import React from 'react';

import '../../css/FlexVertical.css';

function FlexVertical({ children }) {
  return (
    <section className='flex_vertical__container'>
        {children}
    </section>
  );
}

export default FlexVertical;
