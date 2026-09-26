import { FiAlertTriangle } from "react-icons/fi";
import "./ConfirmDelete.css";

export const ConfirmDelete = ({ note, onCancel, onConfirm }) => {
  return (
    <div className="overlay-popup" onClick={onCancel}>
      <div
        className="confirm-box"
        role="alertdialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="confirm-icon">
          <FiAlertTriangle />
        </div>
        <h2 className="confirm-title">Delete note?</h2>
        <p className="confirm-text">
          {note.title ? `"${note.title}"` : "This note"} will be permanently
          deleted. This can't be undone.
        </p>
        <div className="confirm-actions">
          <button type="button" className="cancel-popup" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="confirm-delete-btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};