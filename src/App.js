import './App.css';
import Main from "./components/main";
import { useState, useEffect, createContext } from 'react';


export const ScoreContext = createContext()

function App() {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{score, setScore}}>
      <Main/>
    </ScoreContext.Provider>
  );
}

export default App;
