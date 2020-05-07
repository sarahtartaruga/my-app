import React from "react";
import "./Book.css";
import leftButton from "./logos/left.png";
import rightButton from "./logos/right.png";
import loadingLogo from "./logos/loading.png";

function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll("img");
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
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
    for (let i = 0; i < this.totalPages; i++) {
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
          onLoad={this.handleStateChange}
        ></img>
      );
    }
    return div;
  }

  handleStateChange = () => {
    this.setState({
      loading: !imagesLoaded(this.viewElement),
    });
  };

  renderSpinner() {
    if (!this.state.loading) {
      return null;
    }
    return (
      <div className="Spinner">
        <img
          className="Loading-logo"
          alt="loading-logo"
          src={loadingLogo}
        ></img>
      </div>
    );
  }

  render() {
    return (
      <div className="Book">
        {this.renderSpinner()}
        <div
          className="View-container"
          ref={(element) => {
            this.viewElement = element;
          }}
        >
          <div className="Page-container">{this.createPages()}</div>
          <div className="Button-container">
            <button className="Direction-button" onClick={this.previous}>
              <img
                className="Direction-image"
                id="Direction-image-left"
                alt="direction-left"
                src={leftButton}
              ></img>
            </button>
            <button className="Direction-button" onClick={this.next}>
              <img
                className="Direction-image"
                id="Direction-image-right"
                alt="direction-right"
                src={rightButton}
              ></img>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
