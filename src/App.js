import './App.css';
import Main from "./components/main";
import { useState, useEffect, createContext } from 'react';


export const MainContext = createContext()

function App() {
  const [score, setScore] = useState(0);
  return (
    <MainContext.Provider value={{score, setScore}}>
      <Main/>
    </MainContext.Provider>
  );
}

export default App;
