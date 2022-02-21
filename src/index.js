import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  // componentDidUpdate(){
  //     console.log("my component was just updated");
  // }

  // defining a helper content
  renderBody() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error:{this.state.errMessage}</div>;
    }
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept the location request" />;
  }
  // we must define render function for react
  render() {
    return <div className="border red">{this.renderBody()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
