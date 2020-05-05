import React from "react";
import "./Book.css";
import FlippingPages from "flipping-pages";
import "flipping-pages/FlippingPages.css";

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
      pages.push(
        <div className={"Page Page-" + i} key={i}>
          <img src={this.images[i]} alt={"image-" + i}></img>
        </div>
      );
    }
    return pages;
  }

  // renderPage() {„
  //   return (
  //     <Page
  //       number={this.state.pageActive}
  //       image={this.state.images[this.state.pageActive - 1]}
  //     />
  //   );
  // }

  // TODO: onClick: create new page with new image on click
  // onClick(event) {
  //   this.state.pageActive < this.state.pagesTotal &&
  //     this.setState({ pageActive: this.state.pageActive + 1 });
  // }

  // render() {
  //   return <div className="book">{this.renderPage(this.state.pageActive)}</div>;
  // }

  render() {
    return (
      <div className="App">
        <FlippingPages
          className="App-pages"
          direction="horizontal"
          selected={this.state.selected}
          onSelectedChange={this.handleSelectedChange}
          /* touch-action attribute is required by pointer events
                polyfill */
          touch-action="none"
        >
          {this.createPages()}
        </FlippingPages>
        {/* Buttons are required for keyboard navigation */}
        <button onClick={this.previous} disabled={!this.state.selected}>
          Previous
        </button>
        <button
          onClick={this.next}
          disabled={this.state.selected + 1 === this.totalPages}
        >
          Next
        </button>
      </div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      image: props.image,
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
