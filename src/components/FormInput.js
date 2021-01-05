import React, { Component } from "react";

class FormInput extends Component {
  state = {
    nama: "",
    umur: "",
    alamat: "",
    mobil: "",
    jk: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`hello`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>Mobil saya {this.state.mobil}</p>
          <select
            name="mobil"
            value={this.state.mobil}
            onChange={this.handleChange}
          >
            <option value="fortuner">fortuner</option>
            <option value="pajero">pajero</option>
            <option value="alphard">alphard</option>
            <option value="lexus">lexus</option>
          </select>
          <hr />
          <p>jenis kelamin {this.state.jk}</p>
          <input
            type="radio"
            name="jk"
            value="laki-laki"
            onChange={this.handleChange}
          />
          <input
            type="radio"
            name="jk"
            value="perempuan"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Kirim data</button>
      </form>
    );
  }
}

export default FormInput;
