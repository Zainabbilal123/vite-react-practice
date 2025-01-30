// import { useState } from "react";
// import { useContext } from "react"
// // import ChildA from "./components/ChildA";
// import { createContext } from "react";
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext('light');

function App() 
  
  {
    const [theme, setTheme] = useState('light');
    return (
      <>
        <ThemeContext.Provider value={theme}>
          <Form />
        </ThemeContext.Provider>
        <Button onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}>
          Toggle theme
        </Button>
      </>
    )
  }
  
  function Form({ children }) {
    return (
      <Panel title="Welcome">
        <Button>Sign up</Button>
        <Button>Log in</Button>
      </Panel>
    );
  }
  
  function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{title}</h1>
        {children}
      </section>
    )
  }
  
  function Button({ children, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
   
   
  


export default App
