import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

class Posts extends Component {
  state = {
    posts: [],
  };

  //   getData = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => {
  //         this.setState({
  //           posts: response.data,
  //         });
  //       })
  //       .catch((error) => {
  //         // handle error
  //         console.log(error);
  //       });
  //   };

  //   componentDidMount() {
  //     this.getData();
  //   }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render() {
    return this.state.posts.length > 0 ? (
      <div className="row">
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    ) : (
      <h1 className="text-center">Loading . . .</h1>
    );
  }
}

export default Posts;
