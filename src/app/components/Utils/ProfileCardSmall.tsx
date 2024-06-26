"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ProfileCardSmall({ avatarImgSrc, name, username }: any) {
  return (
    <div className="flex items-center w-full">
      <Avatar className="hover:cursor-pointer">
        <AvatarImage src={avatarImgSrc} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="pl-2 hover:cursor-pointer">
        <p className="text-base text-neutral-50 font-bold">{name}</p>
        <p className="text-sm text-neutral-500">{username}</p>
      </div>
      <Button variant="secondary" className="ml-auto">Follow</Button>
    </div>
  );
}
