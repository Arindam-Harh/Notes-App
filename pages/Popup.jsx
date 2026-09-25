import { useState } from "react";
import "./Popup.css";
import { FiX } from "react-icons/fi";

export const Popup = ({ setPopup, setNotes, editingNote, setEditingNote }) => {
  const [title, setTitle] = useState(editingNote?.title || "");
  const [des, setDes] = useState(editingNote?.des || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !des.trim()) return;

    if (editingNote) {
      setNotes((prev) =>
        prev.map((n) =>
          n.id === editingNote.id
            ? { ...n, title: title.trim(), des: des.trim() }
            : n,
        ),
      );
      setEditingNote(null);
    } else {
      const note = {
        id: Date.now(),
        title: title.trim(),
        des: des.trim(),
        date: Date.now(),
      };
      setNotes((prev) => [note, ...prev]);
    }

    setPopup(false);
  };
  return (
    <div className="overlay-popup">
      <form className="add-popup" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-popup"
          aria-label="Close"
          onClick={() => {
            setEditingNote(null);
            setPopup(false);
          }}
        >
          <FiX />
        </button>
        <input
          type="text"
          className="title-popup"
          placeholder="Title"
          aria-label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="des-popup"
          rows="8"
          placeholder="Type your notes"
          aria-label="Description"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        ></textarea>
        <div className="actions-popup">
          <button
            type="button"
            className="cancel-popup"
            onClick={() => {
              setEditingNote(null);
              setPopup(false);
            }}
          >
            Cancel
          </button>
          <button type="submit" className="save-popup">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
