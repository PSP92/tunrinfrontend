import React from "react";
import {Link} from "react-router-dom"


const Post = ({post}) => {
    ////////////////////
    // Style Object
    ////////////////////
    const div = {
        textAlign: "right",
        // color:"black",
        // border: "3px solid",
        margin: "10px auto",
        width: "80%",
        fontFamily: "Oswald, sans-serif ",

    
    }
    const justone={
        color:"black",
        // fontFamily: "Oswald, sans-serif ",
    }
    const newstyle ={
        color:"#4f9aa8",
        textAlign:"left",
        // fontFamily: "Oswald, sans-serif ",
    }

  return <div style={div}>
      <Link to={`/post/${post.id}`}>
          <h3 style ={justone}>{post.artist}</h3>
      </Link>
      <div style={newstyle}>
      <h4>{post.title}</h4>
      <h4>{post.time}</h4>
      </div>
  </div>;
};
export default Post;