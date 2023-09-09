import { useState } from "react";

import "../style.css";

import PasswordOutput from "./components/PasswordOutput";
import Params from "./components/Params";

function App() {
  const [password, setPassword] = useState("test");

  return (
    <>
      <main>
        <h1>Password Generator</h1>
        <PasswordOutput>{password}</PasswordOutput>
        <Params />
      </main>
    </>
  );
};

export default App
