import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="HeaderWrap">
        <h2>Color Box</h2>
        <button className="btnReset" onClick={this.props.onClick}>
          Reset
        </button>
      </div>
    );
  }
}

export default Header;
