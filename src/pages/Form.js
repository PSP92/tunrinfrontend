import React, { useState } from "react";

const Form = ({ initialTunein, handleSubmit, buttonLabel, history }) => {
  ////////////////////
  // The Form Data State
  ////////////////////
  const [formData, setFormData] = useState(initialTunein);
  /////////////////////
  // functions
  /////////////////////
  const handleChange = (event) => {
    //Make a copy of the current state
    const newState = { ...formData };
    //updating a property on the object
    newState[event.target.name] = event.target.value;
    //pass the object as the new state
    setFormData(newState);
  };
  const handleSubmission = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    history.push("/");
  };

  const songs ={
    backgroundColor:"#A93E55",
  }
  return (
    <form onSubmit={handleSubmission}>
      <input
        placeholder="Title"
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
      />
       <input
       placeholder="Artist"
        type="text"
        onChange={handleChange}
        value={formData.artist}
        name="artist"
      />
      <input
        placeholder="Time"
        type="text"
        onChange={handleChange}
        value={formData.time}
        name="time"
      />
      <input style ={songs} type="submit" value={buttonLabel} />
    </form>
  );
};
export default Form;