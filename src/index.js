import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import About from "./About";
import Service from "./Service";
import FAQ from "./FAQ";
import ContactUs from "./Contact";
import GetQuote from "./GetQuote";
import Blogs from "./Blogs";
import Clients from "./Clients";
import Landing from "./Landing";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <Landing/>
    <Clients/>
    <About/>
    <Service/>
    <FAQ/>
    <GetQuote/>
    <Blogs/>
    <ContactUs/>
  </React.StrictMode>
);

reportWebVitals();
