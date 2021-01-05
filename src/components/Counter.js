import React, { Component } from "react";

class Counter extends Component {
  state = {
    angka: 0,
  };

  //   tambah = () => {
  //     this.setState({
  //       angka: this.state.angka + 1,
  //     });
  //   };

  tambah = () => {
    this.setState((currentState) => ({
      angka: currentState.angka + 1,
    }));
  };

  kurang = () => {
    this.setState((currentState) => ({
      angka: currentState.angka > 0 ? currentState.angka - 1 : 0,
    }));
  };

  render() {
    return (
      <div>
        <p>{this.state.angka}</p>
        <button onClick={this.tambah}>Tambah</button>
        <button onClick={this.kurang}>Kurang</button>
      </div>
    );
  }
}

export default Counter;
