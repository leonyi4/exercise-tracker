import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";

const Error = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <>
      <Nav />
      <div className="text-center h-screen ">
        <h1 className="mt-10 text-4xl font-extrabold">
          Error! page not found!
        </h1>
        <button
          className="text-2xl font-medium border-2 rounded-md p-2 mt-10
             
          transition hover:bg-primary hover:border-black hover:text-secondary 
          border-primary bg-secondary text-primary    
          dark:bg-primary dark:border-secondary dark:text-secondary
          dark:hover:bg-secondary dark:hover:border-primary dark:hover:text-primary
          "
          onClick={clickHandler}
        >
          Go to Home
        </button>
      </div>
    </>
  );
};

export default Error;
