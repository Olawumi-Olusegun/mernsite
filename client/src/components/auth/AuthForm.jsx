import React from 'react';
import { MdClose } from 'react-icons/md';
import { useSearchParams,  } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import AuthModal from '../modals/AuthModal';


  const AuthView = {
    "sign-in": SignInForm,
    "sign-up": SignUpForm,
    "reset-password": ResetPassword,
  }

  const AuthViewLogo = () => {
    return (
      <div className="">
        <img
          src="..\logo\ADLM Studio Logo PNG-07.png" 
          alt="ADLM Logo"
          className="w-20 mx-auto" 
        />
    </div>
    )
  }

  const DefaultAuthView = () => null;

  const AuthForm = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const currentView = searchParams.get("auth");

    const isViewAvailable = ["sign-in", "sign-up", "reset-password"].includes(currentView);

    const CurrentAuthtView = AuthView[currentView] ?? DefaultAuthView;

    const handleCloseModal = () => {
        window.scrollTo(0,0);
        if(searchParams.has("auth")) {
            searchParams.delete("auth");
            setSearchParams(searchParams);
        }
    }

  return (
    <>
    <AuthModal closeModal={handleCloseModal} showModal={isViewAvailable}>
     
    <div className="relative mx-auto border bg-white w-full flex flex-col items-center justify-center md:max-w-96 shadow-lg rounded-md " >
        <button
          onClick={handleCloseModal}
          className="absolute group top-2 right-2 h-8 w-8 flex flex-col items-center justify-center text-lg rounded-full hover:bg-gray-200 duration-300"
        >
          <MdClose  className="text-gray-500 group-hover:text-gray-600" />
        </button>

        <div className="w-full flex flex-col items-center justify-center p-5" onClick={(event) => event.stopPropagation()}>
            <AuthViewLogo />
            <CurrentAuthtView />
        </div>
        
      </div>

    </AuthModal>
    </>
  )
}

export default AuthForm