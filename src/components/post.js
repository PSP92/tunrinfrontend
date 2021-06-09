import React from "react";
import {Link} from "react-router-dom"


const Post = ({post}) => {
    ////////////////////
    // Style Object
    ////////////////////
    const div = {
        textAlign: "right",
        // color:"black",
        border: "1px solid",
        margin: "10px auto",
        width: "80%",
        fontFamily: "Oswald, sans-serif ",
        fontWeight:"bold",
    }
    const justone={
         color:"black",
        padding:"5px 5px 5px 5px",
        // fontFamily: "Oswald, sans-serif ",
        fontWeight:"bold",
    }
    const newstyle ={
        color:"#547AA5",
        textAlign:"left",
    }

  return <div style={div}>
      <Link to={`/post/${post.id}`}>
          <h4 style ={justone}>{post.artist}</h4>
      </Link>
      <div style={newstyle}>
      <h4>{post.title}</h4>
      <h4>{post.time}</h4>
      </div>
  </div>;
};
export default Post;