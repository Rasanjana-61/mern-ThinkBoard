// import React from 'react';

// function NoteDetailPage() {
//   return (
//     <div>
//       <h1>Note Details </h1>
//     </div>
//   );
// }

// export default NoteDetailPage;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get(`http://localhost:5001/api/notes/${id}`)
      .then(res => setNote(res.data))
      .catch(() => toast.error("Note not found"));
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5001/api/notes/${id}`, note);
      toast.success("Note updated!");
      navigate('/');
    } catch {
      toast.error("Update failed");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5001/api/notes/${id}`);
      toast.success("Note deleted!");
      navigate('/');
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h2 className="text-2xl mb-4">Edit Note</h2>
      <input
        type="text"
        className="input input-bordered w-full mb-4"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
      />
      <textarea
        className="textarea textarea-bordered w-full mb-4"
        rows={6}
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
      />
      <div className="flex justify-between">
        <button className="btn btn-primary" onClick={handleUpdate}>Save Changes</button>
        <button className="btn btn-error" onClick={handleDelete}>Delete Note</button>
      </div>
    </div>
  );
}

export default NoteDetailPage;
