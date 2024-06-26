"use client";

import NavBar from "./NavBar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import ForYou from "./ForYou";

export default function HomePage() {
  return (
    <div className="relative flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <NavBar />
      <div className="flex flex-row h-full">
        <LeftSideBar className="fixed left-0 top-14 h-[calc(100%-56px)] border-r border-neutral-50" />
        <div className="flex-grow p-4 mt-14 ml-64 mr-80 w-screen">
          <div className="flex flex-col space-y-4 w-full">
            <ForYou className="w-full" />
          </div>
        </div>
        <RightSideBar className="fixed right-0 top-14 h-[calc(100%-56px)] border-l border-neutral-50" />
      </div>
    </div>
  );
}
