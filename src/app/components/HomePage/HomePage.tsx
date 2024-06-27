"use client";

import NavBar from "./NavBar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import ForYou from "./ForYou";

export default function HomePage() {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <NavBar className="sticky top-0 z-50" />
      <div className="flex flex-row h-full">
        <LeftSideBar className="fixed left-0 top-12 bottom-0 h-[calc(100%-56px)] border-r border-neutral-50" />
        <div className="flex-grow overflow-y-auto pl-16 md:pl-40 lg:pr-80 pr-0">
          <div className="flex flex-col space-y-4 w-full">
            <ForYou className="w-full" />
          </div>
          <RightSideBar className="hidden lg:block fixed right-0 top-14 bottom-0 h-[calc(100%-56px)] border-l border-neutral-50 overflow-y-auto" />
        </div>
      </div>
    </div>
  );
}
