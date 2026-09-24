import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiPlus } from "react-icons/fi";
import { Popup } from "../pages/Popup";

export const App = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [popup, setPopup] = useState(false);
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
        <button className="add-notes" aria-label="Add note" onClick={() => setPopup(true)}>
          <FiPlus />
        </button>
      </main>
      {popup && <Popup setPopup={setPopup} />}
    </div>
  );
};
