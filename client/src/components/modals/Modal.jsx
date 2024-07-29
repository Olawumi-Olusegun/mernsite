import React from 'react'

const Modal = ({children, showModal, closeModal}) => {
   
    const handleEscKeyPress = (event) => {
        if(event.keyCode === 27) {
          closeModal();
        }
    }
    
      useEffect(() => {
        document.addEventListener("keydown", handleEscKeyPress);
        return () => document.removeEventListener("keydown", handleEscKeyPress);
      }, [closeModal])
    
      if(!showModal) return null;
    
      return (
        <div onClick={() => closeModal()} className="fixed px-2 z-50 inset-0 bg-white bg-opacity-5 backdrop-blur-md overflow-y-auto min-h-dvh w-full" >
          <div className="w-full h-dvh flex flex-col items-center justify-center" >
            {children}
          </div>
        </div>
      )
}


export default Modal