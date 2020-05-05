import React from "react";
import "./Book.css";
import leftButton from "./logos/left.png";
import rightButton from "./logos/right.png";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images;
    this.totalPages = props.images.length;
    this.selected = 0;
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.imgRefs = [];
    for (let i = 0; i < this.totalPages; i++) {
      this.imgRefs.push(React.createRef());
    }
  }

  previous() {
    if (this.selected > 0) {
      this.selected = this.selected - 1;
      const img = this.imgRefs[this.selected].current;
      img.className = "Page-image Page-image--add";
    }
  }

  next() {
    if (this.selected < this.totalPages - 1 && this.selected >= 0) {
      const img = this.imgRefs[this.selected].current;
      img.className = "Page-image Page-image--remove";
      this.selected = this.selected + 1;
    }
  }

  createPages() {
    let div = [];
    div.push(<div className={"Page"} key={"page"}></div>);
    for (let i = 0; i <= this.totalPages; i++) {
      let divStyle = {
        zIndex: this.totalPages - i,
      };
      div.push(
        <img
          ref={this.imgRefs[i]}
          className={"Page-image"}
          src={this.images[i]}
          alt={"image-" + i}
          style={divStyle}
          key={i}
        ></img>
      );
    }

    return div;
  }

  render() {
    return (
      <div className="Book">
        <div className="Space">{this.createPages()}</div>
        <div className="Space" id="Button-area">
          <button className="Direction-button" onClick={this.previous}>
          <img className="Direction-image" src={leftButton}></img>
          </button>
          <button className="Direction-button" onClick={this.next}>
            <img className="Direction-image" src={rightButton}></img>
          </button>
        </div>
      </div>
    );
  }
}

export default Book;
