import React, { useEffect, useRef } from "react";
    import { createPortal } from "react-dom";

    const Modal = ({ children }) => {
      const elRef = useRef(null);
    
      if (!elRef.current) {
        elRef.current = document.createElement("div");
      }
    
      useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);
    
        return () => modalRoot.removeChild(elRef.current);
        }, []);
    
      return createPortal(<div style={{ position: "fixed", left: 0, top: 0, background: "white" }}>{children}</div>, elRef.current);
    };
    
    export default Modal;