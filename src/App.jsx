import {useState} from "react";
    import usePortal from "./usePortal";
    import './App.css';
    import React from "react";
    
    function App() {

        const { isOpen, openPortal, closePortal, Portal } = usePortal(true);
    
      return (
        <div className="App">
          <h1 className="App-header">
           Какой-то контент
           <>
            <button onClick={openPortal}>Открыть портал</button>
            {isOpen && (
              <Portal>
                <p>
                  Ого,  да это ваш собственный портал!
                </p>
                <button onClick={closePortal}>Закрыть портал </button>
              </Portal>
            )}
          </>
          </h1>
          
        </div>
      );
    }
    
    export default App;