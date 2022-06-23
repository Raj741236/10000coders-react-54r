import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);

// let counter = 0;

// const handleClick = () => {
//     counter ++;
//     console.log(counter)
//     renderContent();
// }

// const renderContent = ()=>{
//     const content = (<div>
//       <button onClick={handleClick}>Increment</button>
//       <h1>Counter is {counter}</h1>
//   </div>);
//   ReactDOM.render(content,document.getElementById('root'))
// }

// renderContent()
