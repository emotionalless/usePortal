import {useEffect, useState, useRef} from 'react';
import {createPortal} from 'react-dom'

const usePortal = (initialValue) => {

      const [isOpen, setIsOpen] = useState(initialValue);

      const openPortal = () => {
            setIsOpen(true);
      }

      const closePortal = () => {
            setIsOpen(false);
      }

      const Portal = ({children}) => {
            const elRef = useRef(null);
          
            if (!elRef.current) {
              elRef.current = document.createElement("div");
            }
          
            useEffect(() => {
              const modalRoot = document.getElementById("modal");
              modalRoot.appendChild(elRef.current);
          
              return () => modalRoot.removeChild(elRef.current);
              }, []);
          
            return createPortal(<div style={{ position: "fixed", left: 0, top: 0, background: "white" }}>{children}11111111111111</div>, elRef.current); 
      }

         return [isOpen, openPortal, closePortal, Portal];
         ;
      ;
}


export default usePortal;