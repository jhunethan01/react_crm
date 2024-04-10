import React from 'react';
import '../../css/Overview.css';

function Welcome({title, description}) {

    return (
        <>
            <h1 className='tab-title'>
                {title}
            </h1>
            <p>
                {description}
            </p>
        </>
    );
}

export default Welcome;
