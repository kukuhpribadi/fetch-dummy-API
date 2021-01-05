import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="card shadow mb-3 p-3" style={{ borderRadius: "25px" }}>
          <h2 style={{ textTransform: "capitalize" }}>{this.props.title}</h2>
          <hr style={{ border: "solid 3px rgba(0, 0, 0, 0.5)" }} />
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Post;
