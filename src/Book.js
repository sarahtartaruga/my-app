import React from "react";
import "./Book.css";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images;
    this.totalPages = props.images.length;
    this.selected = 0;
    // this.state = {
    //   selected: 0,
    // };
    // this.handleSelectedChange = this.handleSelectedChange.bind(this);
    // this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.wrapperRef = React.createRef();
  }

  // handleSelectedChange(selected) {
  //   this.setState({ selected });
  // }
  //
  // previous() {
  //   this.setState((state) => ({
  //     selected: state.selected - 1,
  //   }));
  // }

  next() {
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-open');
    // this.setState((state) => ({
    //   selected: state.selected + 1,
    // }));
    this.selected = this.selected + 1;
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
            className={"Page-image Page-image-" + i}
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
            src={this.images[this.totalPages-1]}
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
      <div ref={this.wrapperRef} className="wrapper">

        {this.createPages()}
      </div>
      </div>
    );
  }
}

export default Book;
