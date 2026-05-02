import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

export default function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/notes", { title, content });
    navigate("/");
  };

  return (
    <div className="bg-white p-6 rounded shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-6 border-b pb-2">
        <h1 className="text-2xl font-bold">Tambah Catatan</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Kembali
        </Link>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Judul</label>
          <input 
            type="text" 
            placeholder="Enter title..." 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            required 
            autoFocus
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Isi notes</label>
          <textarea 
            placeholder="Type your notes" 
            value={content} 
            onChange={(e) => setContent(e.target.value)}
            className="border border-gray-300 p-2 rounded h-48 resize-none focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        
        <button type="submit" className="bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition">
           Simpan
        </button>
      </form>
    </div>
  );
}
