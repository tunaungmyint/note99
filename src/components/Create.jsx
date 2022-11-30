import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [input, setInput] = useState({
    title: '',
    content: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    const newNote = {
      title: input.title,
      content: input.content,
    };
    axios.post('http://localhost:3001/create', newNote);
  }

  return (
    <div className="container my-5">
      <h1 className="text-center">Create Note</h1>
      <form className="d-grid gap-3">
        <div className="form-group">
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            name="title"
            placeholder="title"
            value={input.title}
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={handleChange}
            name="content"
            id=""
            cols="30"
            rows="5"
            className="form-control"
            placeholder="content ..."
            value={input.content}
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          className="btn btn-lg btn-info text-white text-uppercase"
        >
          Add note
        </button>
      </form>
    </div>
  );
};

export default Create;
