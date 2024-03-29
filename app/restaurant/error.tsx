"use client";
import Image from "next/image";
import { FC } from "react";

import errorMascot from "../../public/icons/error.png";

interface errorProps {
  error: Error;
}

const error: FC<errorProps> = ({ error }) => {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorMascot} alt="error mascot" className="w-56 mb-8 " />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h1 className="text-3xl font-bold">Well, this is embarrassing</h1>
        <p className="text-reg font-bold ">{error.message}</p>
        <p className="mt-6 text-sm font-light">Error Code: 400</p>
      </div>
    </div>
  );
};

export default error;
