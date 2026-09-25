import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiPlus } from "react-icons/fi";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Popup } from "../pages/Popup";

export const App = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [popup, setPopup] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [notes, setNotes] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("notes"));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <div className={`container-notes ${dark ? "dark" : "light"}`}>
      <header className="header-notes">
        <h1 className="h1-notes">Notes</h1>
        <button
          aria-label="Toggle theme"
          className={dark ? "darkBtn" : "lightBtn"}
          onClick={() => setDark(!dark)}
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>
      </header>
      <main className="display-notes">
        {notes.length === 0 ? (
          <p className="empty-notes">No notes yet. Tap + to add one.</p>
        ) : (
          <ul className="notes-ul">
            {notes.map((note) => (
              <li className="note-card" key={note.id}>
                <div className="note-actions">
                  <button
                    className="edit-note"
                    aria-label="Edit note"
                    onClick={() => {
                      setEditingNote(note);
                      setPopup(true);
                    }}
                  >
                    <FiEdit2 />
                  </button>
                  <button
                    className="delete-note"
                    aria-label="Delete note"
                    onClick={() =>
                      setNotes((prev) => prev.filter((n) => n.id !== note.id))
                    }
                  >
                    <FiTrash2 />
                  </button>
                </div>
                <h2 className="note-title">{note.title}</h2>
                <p className="note-body">{note.des}</p>
                <p className="note-date">
                  {new Date(note.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
        <button
          className="add-notes"
          aria-label="Add note"
          onClick={() => {
            setEditingNote(null);
            setPopup(true);
          }}
        >
          <FiPlus />
        </button>
      </main>
      {popup && (
        <Popup
          setPopup={setPopup}
          setNotes={setNotes}
          editingNote={editingNote}
          setEditingNote={setEditingNote}
        />
      )}
    </div>
  );
};
