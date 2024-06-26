"use client";

import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function HomePage() {
  return (
    <div className="relative flex flex-col h-full">
      <NavBar />
      <div className="flex flex-row h-screen w-screen px-80">
        <SideBar className=""/>
        <div className="">
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  );
}
