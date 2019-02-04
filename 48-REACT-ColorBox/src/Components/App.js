import React from "react";
import Header from "./Header.js";
import SideBar from "./SideBar.js";
import Main from "./Main.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 21,
      hueStart: 70,
      hueEnd: 270,
      saturationStart: 50,
      saturationEnd: 50,
      luminosityStart: 50,
      luminosityEnd: 50
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.className]: parseInt(e.target.value)
    });
  }

  handleReset() {
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Header onClick={this.handleReset} />
        <div className="Wrap">
          <SideBar onChange={this.handleChange} {...this.state} />
          <Main {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;
