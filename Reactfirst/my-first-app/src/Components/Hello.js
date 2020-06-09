import React from 'react';
//import { render } from '@testing-library/react';

// const Hello=()=>{
//     return(
// <div>
// <h1>Hello</h1>
// </div>

//     )
// }

//below code is JSX in React
const Hello = () => {
    return React.createElement('div',
        { id: 'idhello', className: 'dummyname' },
        React.createElement('h1', null, 'Hello Suthagar'))
}

export default Hello;