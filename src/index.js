import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Book from './Book';
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";




ReactDOM.render(
  <React.StrictMode>
    <Book images={[image1, image2, image3, image4, image5]}/>
  </React.StrictMode>,
  document.getElementById('root')
);
