"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { GoPersonFill } from "react-icons/go";

const buttons = [
  { icon: FaHome, label: "Home" },
  { icon: FaSearch, label: "Search" },
  { icon: MdNotifications, label: "Notifications" },
  { icon: FaMessage, label: "Messages" },
  { icon: GoPersonFill, label: "Profile" },
];

export default function LeftSideBar({ className }: any) {
  return (
    <div
      className={cn(
        "pt-4 w-fit bg-neutral-950 text-white flex-shrink-0",
        className
      )}
    >
      <div className="space-y-4 py-4">
        <div className="py-2">
          <div className="space-y-4">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant="default"
                size="sm"
                className="w-full flex items-center bg-neutral-950 justify-start text-base"
              >
                <button.icon className="mr-2 h-4 w-4" />
                <span className="hidden md:block">{button.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
