"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";

export default function LeftSideBar({ className }: any) {
  return (
    <div className={cn("pt-4 w-64 bg-neutral-900 text-white flex-shrink-0", className)}>
      <div className="space-y-4 py-4">
        <div className="py-2">
          <div className="space-y-4">
            <Button
              variant="default"
              size="sm"
              className="w-full flex items-center justify-start text-base"
            >
              <FaHome className="mr-2 h-4 w-4" />
              Home
            </Button>
            <Button
              variant="default"
              size="sm"
              className="w-full flex items-center justify-start text-base"
            >
              <FaSearch className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button
              variant="default"
              size="sm"
              className="w-full flex items-center justify-start text-base"
            >
              <MdNotifications className="mr-2 h-4 w-4" />
              Notifications
            </Button>
            <Button
              variant="default"
              size="sm"
              className="w-full flex items-center justify-start text-base"
            >
              <FaMessage className="mr-2 h-4 w-4" />
              Messages
            </Button>
            <Button
              variant="default"
              size="sm"
              className="w-full flex items-center justify-start text-base"
            >
              <GoPersonFill className="mr-2 h-4 w-4" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
