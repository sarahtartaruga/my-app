import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Book from "./Book";
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import imagetest from "./images/artscan1.png";
import imagelake from "./images/lake3.jpg";

ReactDOM.render(
  <React.StrictMode>
    <Book images={[image1, imagelake, imagetest, image2, image6, image3, image4, image5]} />
  </React.StrictMode>,
  document.getElementById("root")
);
