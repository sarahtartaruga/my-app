import React from "react";
import logo from "./envelop.png";
import "./Book.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>Yrah</code> and save to have fun.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// function Book() {
//   return (
//     <div className="Book">
//       <div class="container">
//         <div class="cover">
//
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default Book;

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagesTotal: 1,
      pageActive: 1
    };
  }

  renderPage(i) {
    return <Page value={i} path={logo} />;
  }

  render() {
    return (
      <div class="container">{this.renderPage(this.state.pageActive)}</div>
    );
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      path: props.path
    };
  }

  render() {
    return (
      <div className="cover">
        <img src={this.state.path} />
      </div>
    );
  }
}

export default Book;
