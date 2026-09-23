import { useState } from "react";
import { FiSun, FiMoon, FiPlus } from "react-icons/fi";

export const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={`container-notes ${dark ? "dark" : "light"}`}>
      <header className="header-notes">
        <h1 className="h1-notes">Notes</h1>
        <button aria-label="Toggle theme" className={dark ? "darkBtn" : "lightBtn"} onClick={() => setDark(!dark)}>
          {dark ? <FiSun /> : <FiMoon />}
        </button>
      </header>
      <main className="display-notes">
        <button className="add-notes" aria-label="Add note">
          <FiPlus />
        </button>
      </main>
    </div>
  );
};