import React from "react";
import logo from "./envelop.png";
import "./Book.css";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageActive: 1,
      images: props.images,
      pagesTotal: props.images.length
    };
  }

  renderPage() {
    return (
      <Page
        number={this.state.pageActive}
        image={this.state.images[this.state.pageActive - 1]}
      />
    );
  }

  // TODO: onClick: create new page with new image on click
  onClick(event) {
    this.state.pageActive < this.state.pagesTotal &&
      this.setState({ pageActive: this.state.pageActive + 1 });
  }

  render() {
    return <div className="book">{this.renderPage(this.state.pageActive)}</div>;
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      image: props.image
    };
  }

  render() {
    return (
      <div className="page">
        <img src={this.state.image} alt={this.state.number} />
      </div>
    );
  }
}

export default Book;
