import React from "react";
import { GITHUB_SVG } from "./elements/SVG";

export default function NavBar() {
  return (
    <div className="w-full flex text-green-300 items-center relative">
      <img src="/logo.jpg" className="w-8 h-8 mr-2" />
      <p className="text-4xl font-medium text-green-300">Github Profile Maker</p>
      <a
        href="https://github.com/lucthienphong1120/github-profile-maker"
        className="flex absolute right-0 justify-center items-center p-2 px-6 bg-green-300 text-green-900 font-semibold rounded-full shadow-lg hover:shadow-green-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 -mr-6 md:mr-0 sm:scale-100"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GITHUB_SVG/>
        OpenSource
      </a>
    </div>
  );
}
