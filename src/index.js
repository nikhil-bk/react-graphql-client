import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';


const link =createHttpLink({
  uri:process.env.REACT_APP_SERVER,
  credentials:'same-origin'
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    dataIdFromObject(o){
      return o.id
    }
  }),

  
  

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
