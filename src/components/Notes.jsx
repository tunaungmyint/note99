import React, { useState, useEffect } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      title: '',
      content: '',
    },
  ]);

  useEffect(() => {
    fetch('/notes')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setNotes(jsonRes));
  });

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Notes;
