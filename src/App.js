import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { fetchImages } from "./redux/actions";

class App extends Component {
  render() {
    const { fetching, img, onRequest, error } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={img || logo} className="App-logo" alt="logo" />
          <h1 className="app-title">Picture Switcharoo</h1>
        </header>
        {img ? (
          <p className="App-intro">Click more for new pic</p>
        ) : (
          <p className="App-intro">Replace the React logo</p>
        )}

        {fetching ? (
          <button className="button" disabled>
            Fetching...
          </button>
        ) : (
          <button onClick={onRequest}>NEW PIC</button>
        )}

        {error && <p style={{ color: "red" }}>Error!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    img: state.img,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequest: () => dispatch(fetchImages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
