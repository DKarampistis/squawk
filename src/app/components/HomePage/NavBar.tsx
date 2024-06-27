import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function NavBar({ className }) {
  const [activeButton, setActiveButton] = useState('forYou');
  const [searchOpen, setSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update the window width when the component mounts
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Initial call to set the width
    handleResize();

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <nav className={`bg-neutral-950 bg-opacity-50 backdrop-blur shadow-sm ${className}`}>
      {searchOpen && (
        <div className="block md:hidden absolute top-0 left-0 w-full bg-neutral-900 p-4 z-50">
          <div className="relative">
            <Input placeholder="Search..." className="w-full bg-neutral-900 border-neutral-500 text-neutral-50" autoFocus />
            <IoMdClose 
              className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 transform fill-neutral-50 cursor-pointer"
              onClick={closeSearch}
            />
          </div>
        </div>
      )}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <Image src="/squawk_bird_invert.png" alt="Squawk Icon" width={53} height={24} className="h-6 w-13" />
            <span className="sr-only">Squawk Icon</span>
          </Link>
          <div className="flex gap-4 md:gap-36">
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
          </div>
          <div className="relative flex items-center max-w-xl min-w-s md:w-1/6">
            <FaSearch 
              className="absolute -left-4 md:left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform fill-neutral-50 cursor-pointer" 
              onClick={windowWidth < 768 ? toggleSearch : null}
            />
            <Input placeholder="Search..." className="hidden md:block pl-8 bg-neutral-900 border-neutral-500 text-neutral-50" />
          </div>
        </div>
      </div>
    </nav>
  );
}
