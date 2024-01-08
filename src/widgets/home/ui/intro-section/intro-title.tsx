import React from "react";

export default function IntroTitle() {
  return (
    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-200 md:text-6xl md:tracking-tight">
      <span>Сыграй в </span>{" "}
      <span className="leading-12 block w-full bg-gradient-to-r from-violet-500 to-green-400 bg-clip-text py-2 text-transparent lg:inline">
        QUIZ TOWER
      </span>{" "}
      <span></span>
    </h1>
  );
}
