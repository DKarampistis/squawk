"use client";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileCardSmall from "../Utils/ProfileCardSmall";

export default function RightSideBar({ className }: any) {
  return (
    <div className={cn("pt-14 w-80 bg-neutral-900 text-white flex-shrink-0", className)}>
      <div className="flex flex-col items-center space-y-4">
        <Card className="w-[275px] bg-neutral-900 border-neutral-500">
          <CardHeader>
            <CardTitle className="text-neutral-50 text-lg">People to follow.</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-6">
            <ProfileCardSmall avatarImgSrc="https://github.com/shadcn.png" name="Shadcn" username="@Shadcn" />
            <ProfileCardSmall avatarImgSrc="https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png" name="OpenAI" username="@openai" />
            <ProfileCardSmall avatarImgSrc="https://icones.pro/wp-content/uploads/2021/06/icone-github-violet.png" name="Github" username="@github" />
          </CardContent>
        </Card>
        <Card className="w-[275px] bg-neutral-900 border-neutral-500">
          <CardHeader>
            <CardTitle className="text-neutral-50 text-lg">Trending now.</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col space-y-6">
            <div>
              <p className="text-neutral-50 font-bold text-base">#ai</p>
              <p className="text-neutral-500 text-sm">3.7k posts</p>
            </div>
            <div>
              <p className="text-neutral-50 font-bold text-base">#automation</p>
              <p className="text-neutral-500 text-sm">2.9k posts</p>
            </div>
            <div>
              <p className="text-neutral-50 font-bold text-base">#robotics</p>
              <p className="text-neutral-500 text-sm">2.6k posts</p>
            </div>
            <div>
              <p className="text-neutral-50 font-bold text-base">#technology</p>
              <p className="text-neutral-500 text-sm">2.5k posts</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  );
}
