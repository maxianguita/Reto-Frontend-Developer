// Home.jsx
import React from 'react';
import Form from './Form/Form';
import './home.css';
import Icono from '../icons/Icon.png';


const Home = () => {
  return (
    <div> 
      <div className="home-container">
        <div className="icon-container">
          <img src={Icono} alt="Icono subscribite" className="icono" />
        </div>
        <div className="subscribite-text">
          <h1>SUBSCRIBE</h1>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Home;
