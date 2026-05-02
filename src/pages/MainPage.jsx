import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PencilLine, Trash2 } from "lucide-react";

export default function MainPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("/api/notes");
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id) => {
    if(window.confirm("Hapus catatan ini selamanya?")) {
      await axios.delete(`/api/notes/${id}`);
      setNotes(notes.filter((n) => n.id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 border-b pb-2">Notes list</h1>
      
      {notes.length === 0 && (
        <p className="text-gray-500 italic">Still Empty</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-white p-5 rounded border border-gray-200 shadow-sm flex flex-col">
            <h2 className="text-lg font-bold text-gray-800 mb-2">{note.title}</h2>
            <p className="text-gray-600 mb-4 whitespace-pre-wrap flex-grow">{note.content}</p>
            
            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
              <Link to={`/edit/${note.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600 transition">
                Edit
              </Link>
              <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
