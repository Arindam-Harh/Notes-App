import { useState } from "react";
import "./Popup.css";
import { FiX } from "react-icons/fi";

export const Popup = ({ setPopup }) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add the note to the notes state
    setPopup(false);
  };

  return (
    <div className="overlay-popup">
      <form className="add-popup" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-popup"
          aria-label="Close"
          onClick={() => setPopup(false)}
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
            onClick={() => setPopup(false)}
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
