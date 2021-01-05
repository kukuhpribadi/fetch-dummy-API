import React, { Component } from "react";

class Component4 extends Component {
  state = {
    nama: "Kurniawan",
    umur: 31,
  };

  render() {
    return (
      <div>
        <h2>Halo nama saya {this.state.nama}</h2>
        <h3>Umur {this.state.umur}</h3>
        <div>{this.state.hobi}</div>
      </div>
    );
  }
}

export default Component4;
