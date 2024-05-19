
// this is react17 version
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


// this is react18 new version
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


