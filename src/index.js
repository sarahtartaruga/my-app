import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Book from './Book';
import image1 from "./envelop.png";
import image2 from "./bsp1.png";
import image3 from "./left1.png";


ReactDOM.render(
  <React.StrictMode>
    <Book images={[image1, image2, image3]}/>
  </React.StrictMode>,
  document.getElementById('root')
);
