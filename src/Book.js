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

  createPages() {
    let div = [];
    div.push(<div className={"Page"}></div>);
    for (let i = 0; i < this.totalPages; i++) {
      div.push(
        <img
          className={"Page-image Page-image-" + i}
          src={this.images[i]}
          alt={"image-" + i}
        ></img>
      );
    }

    return div;
  }

  render() {
    return (
      <div className="Book">
        <div className="BookContainer">{this.createPages()}</div>
      </div>
    );
  }
}

export default Book;
