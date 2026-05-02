import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
            <Link to="/" className="text-2xl font-bold">
              Notes App
            </Link>
            <Link to="/add" className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 font-medium">
              + Add Note
            </Link>
          </div>
        </header>

        <main className="max-w-5xl mx-auto w-full p-4 flex-grow mt-4">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="/edit/:id" element={<EditNote />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
          <p>Haidar Rafif Radithya - 2406408836</p>
        </footer>
      </div>
    </Router>
  );
}
