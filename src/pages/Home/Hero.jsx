import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
        <p className="text-xl font-bold text-brown dark:text-orange">
          Want to get fit?
          <br />
          Welcome to
        </p>
        <h1 className="text-5xl font-bold p-4 dark:text-secondary">
          Cool Exercise Tracker
        </h1>
        <h4 className="text-3xl font-semibold p-4 text-brown">
          Keep track of your exercises
        </h4>
        <div className="mt-4">
          <Link
            to="/login"
            className="text-2xl font-medium border-2 rounded-md p-2 
             
             transition hover:bg-primary hover:border-black hover:text-secondary 
             border-white bg-secondary text-primary hover:p-4 hover:text-3xl
             duration-300
             "
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
