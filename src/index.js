import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import Main_page from './Main_component/Main_page';
import Product from './Main_component/product';
import Contact from './Main_component/contact';
import About from './Main_component/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import{
  Routes,BrowserRouter as Router,Route
} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    <Router>
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Main_page/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    
    </Routes>
    <Footer/>
    </div>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
