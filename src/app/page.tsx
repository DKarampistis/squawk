import Image from "next/image";
import JoinPage from "./components/JoinPage/JoinPage";
import HomePage from "./components/HomePage/HomePage";
import squawk_bird from "@/../public/squawk_bird.png";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center bg-primary overflow-x-hidden">
      {/* Join Page */}
      {/* <div className="relative md:mt-24">
        <Image src={squawk_bird} alt="Squawk bird" className="absolute top-0 z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <JoinPage />
      </div> */}
      {/* Home Page */}
      <HomePage />
    </main>
  );
}
