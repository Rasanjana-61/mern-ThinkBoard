// import React from 'react';

// function CreatePage() {
//   return (
//     <div>
//       <h1>Create page</h1>
//     </div>
//   );
// }

// export default CreatePage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function CreatePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:5001/api/notes', { title, content });
      toast.success("Note created!");
      navigate('/');
    } catch (err) {
      toast.error("Error creating note");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-2xl mb-4">Create New Note</h2>
      <input
        type="text"
        placeholder="Title"
        className="input input-bordered w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        className="textarea textarea-bordered w-full mb-4"
        rows={6}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleCreate}>
        Create Note
      </button>
    </div>
  );
}

export default CreatePage;

