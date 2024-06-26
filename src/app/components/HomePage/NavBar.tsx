import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import squawkIcon from "@/../public/squawk_bird.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

export default function NavBar({ className }) {
  const [activeButton, setActiveButton] = useState('forYou');

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className={`bg-neutral-900 shadow-sm ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <Image src={squawkIcon} alt="Squawk Icon" width={53} height={24} className="h-6 w-13" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex gap-36">
            <Button
              variant="link"
              className={`font-medium flex items-center text-sm text-neutral-50 font-bold transition-colors ${activeButton === 'forYou' ? 'underline' : ''}`}
              onClick={() => handleButtonClick('forYou')}
            >
              For You
            </Button>
            <Button
              variant="link"
              className={`font-medium flex items-center text-sm text-neutral-50 font-bold transition-colors ${activeButton === 'following' ? 'underline' : ''}`}
              onClick={() => handleButtonClick('following')}
            >
              Following
            </Button>
          </nav>
          <div className="relative flex items-center max-w-xl min-w-s md:w-1/6">
            <FaSearch className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform fill-neutral-50" />
            <Input placeholder="Search..." className="pl-8 bg-neutral-900 border-neutral-500 text-neutral-50" />
          </div>
        </div>
      </div>
    </nav>
  );
}
