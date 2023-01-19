import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-4 px-16 mt-4 bg-black dark:bg-green text-primary dark:text-black ">
      <div className="">
        <h1 className="text-center font-bold text-brown dark:text-orange w-full text-3xl">
          CET
        </h1>
        <p className="text-center p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          porro nemo recusandae reprehenderit neque odit quasi perspiciatis
          blanditiis consequuntur rem explicabo autem sint aut magni sapiente,
          rerum, quam quibusdam dignissimos.
        </p>
        <div className="flex justify-center gap-4">
          <AiFillGithub size={30} />
          <AiOutlineTwitter size={30} />
          <SiGmail size={30} />
        </div>
      </div>
    </div>
  );
};

export default footer;
