import React, { useEffect, useRef } from 'react'

const AuthModal = ({children, showModal, closeModal}) => {
  
  const modalRef = useRef(null);

  useEffect(() => {

    const handleEscKeyPress = (event) => {
      window.scrollTo(0,0);
      if(modalRef?.current && event.keyCode === 27) {
        closeModal();
      }
    }

    if(showModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscKeyPress);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscKeyPress);
    }

  }, [showModal, closeModal]);


  if(!showModal) return null;

  return (
    <div ref={modalRef} onClick={() => closeModal()} className="fixed z-50 inset-0 bg-white bg-opacity-5 backdrop-blur-md min-h-dvh w-full" >
      <div className="w-full min-h-dvh  py-3 flex flex-col items-center justify-center px-2" >
        {children}
      </div>
    </div>
  )
}

export default AuthModal