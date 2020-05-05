import React from "react";
import "./Book.css";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images;
    this.totalPages = props.images.length;
    this.selected = 0;
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.imgRefs = [];
    for (let i = 0; i < this.totalPages; i++) {
      this.imgRefs.push(React.createRef());
    }
  }

  handleSelectedChange(selected) {
    this.selected = selected;
  }

  previous() {
    if (this.selected > 0) {
      const img = this.imgRefs[this.selected + 1].current;
      img.classList.toggle("Page-image--add");
    }
    this.selected = this.selected - 1;
  }

  next() {
    if (this.selected < this.totalPages - 1) {
      const img = this.imgRefs[this.selected].current;
      img.classList.toggle("Page-image--remove");
    }
    this.selected = this.selected + 1;
    //this.forceUpdate();
  }

  createPages() {
    let div = [];
    div.push(<div className={"Page"}></div>);
    for (let i = this.selected; i < this.totalPages; i++) {
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
        ></img>
      );
    }

    if (this.selected >= this.totalPages) {
      let divStyle = {
        zIndex: this.totalPages,
      };
      div.push(
        <img
          className={"Page-image Page-image-" + this.totalPages}
          src={this.images[this.totalPages - 1]}
          alt={"image-" + this.totalPages}
          style={divStyle}
        ></img>
      );
    }
    return div;
  }

  render() {
    return (
      <div className="Book" onClick={this.next.bind(this)}>
      <div className="Space">
        {this.createPages()}
        </div>
        <div className="Space"
        id="Button-area">
          <button
            className="Direction-button"
            onClick={this.previous}
            disabled={!this.selected}
          >
            Previous
          </button>
          <button
            className="Direction-button"
            onClick={this.next}
            disabled={this.selected + 1 === this.totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Book;
