import React, { Component } from "react";

class Biodata extends Component {
  render() {
    return (
      <div>
        <h2>Halo nama saya {this.props.nama}</h2>
        <h3>Umur {this.props.umur}</h3>
        <div>{this.props.hobi}</div>
      </div>
    );
  }
}

export default Biodata;
