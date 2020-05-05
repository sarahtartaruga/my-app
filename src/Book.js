import React from "react";
import "./Book.css";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images;
    this.totalPages = props.images.length;
    this.state = {
      selected: 0,
    };
    this.handleSelectedChange = this.handleSelectedChange.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  handleSelectedChange(selected) {
    this.setState({ selected });
  }

  previous() {
    this.setState((state) => ({
      selected: state.selected - 1,
    }));
  }

  next() {
    this.setState((state) => ({
      selected: state.selected + 1,
    }));
  }

  // creates pages i with CSS classes Page-i and image src from props array
  // TODO: better exclude Page as a single class?
  createPages() {
    let pages = [];

    for (let i = 0; i < this.totalPages; i++) {
      // default back page
      let pageStyle = {
        background: '#f44336',
      };
      // other pages: have following page as background
      if (i < this.totalPages-1) {
        pageStyle = {
          backgroundImage: 'url(' + this.images[i+1] + ')',
          backgroundRepeat: 'no-repeat',

        };
      };

      pages.push(
        <div className={"Page Page-" + i} style={pageStyle} key={i}>
          <img className={"Page-image"} src={this.images[i]} alt={"image-" + i}></img>
        </div>
      );
    }
    return pages;
  }

  render() {
    return (
      <div className="Book">
      <div className="BookContainer">
          {this.createPages()}
        <div className="Space" id="ButtonSection">
        <button className="DirectionButton" onClick={this.previous} disabled={!this.state.selected}>
          Previous
        </button>
        <button className="DirectionButton"
          onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}
        >
          Next
        </button></div>
        </div>
      </div>
    );
  }
}

export default Book;
