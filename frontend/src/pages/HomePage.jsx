// import React from 'react';
// //import Navbar from ".../components/Navbar";

// const HomePage = () => {
//   return <div className='min-h-screen'>
//     <Navbar></Navbar>
//   </div>
// };
// export default HomePage;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/notes');
      setNotes(res.data);
    } catch (err) {
      toast.error("Failed to load notes");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/notes/${id}`);
      toast.success("Note deleted!");
      fetchNotes();
    } catch (err) {
      toast.error("Error deleting note");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map(note => (
          <div key={note._id} className="card shadow-md bg-neutral text-neutral-content">
            <div className="card-body">
              <h2 className="card-title">{note.title}</h2>
              <p>{note.content}</p>
              <p className="text-xs opacity-70">{new Date(note.createdAt).toDateString()}</p>
              <div className="card-actions justify-end">
                <Link to={`/note/${note._id}`} className="btn btn-sm">Edit</Link>
                <button onClick={() => handleDelete(note._id)} className="btn btn-sm btn-error">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
