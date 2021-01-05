import React from "react";

const NewBiodata = (props) => {
  return (
    <div>
      <h2>Halo nama saya {props.nama}</h2>
      <h3>Umur {props.umur}</h3>
      <div>{props.hobi}</div>
    </div>
  );
};

export default NewBiodata;
