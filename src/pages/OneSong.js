import React from "react";
import {Link} from "react-router-dom"

const OneSong = ({posts, match, edit,deleteTunein}) => {
    // Getting the id and displaying the right post
    const id = parseInt(match.params.id)
    const post = posts.find((post) => post.id === id)
    /////////////////////////
    // Style Object
    //////////////////////////
    const div = {
        textAlign: "center",
        // Color:"black",
        border: "3px solid #A93E55",
        width: "80%",
        margin: "30px auto",
        backgroundColor:"white",
        fontFamily: "Oswald, sans-serif ",
    }
    const makeSong= {
        backgroundColor:"#A93E55",
        border:"2px solid #A93E55"
    }
    const titles ={
        color:"#547AA5", 
    }
    const hotpot={
        color:"black",
    }
  return post ?  <div style={div}>
      {/* when refresh the page */}
      <h1 style={titles}>{post.title}</h1>
      <div style={hotpot}> 
      <h2>{post.artist}</h2>
      <h2>{post.time}</h2>
      </div>
      <button style ={makeSong} onClick={() => edit(post)}>Edit</button>
      <button style = {makeSong} onClick={() => deleteTunein(post)}>Delete</button>
      <Link to="/">
          <button style = {makeSong}>Go Back</button>
      </Link>
  </div> : null  
//   :null after refreshing return the same page
};
export default OneSong;