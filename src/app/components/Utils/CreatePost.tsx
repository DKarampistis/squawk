import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function CreatePost({ avatarImgSrc }: any) {
    return (
        <Card className="bg-color-900">
            <CardHeader>
                <CardTitle className="text-neutral-50 font-bold text-base pl-2">
                    Share your thoughts...
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-6">
                <div className="flex items-center w-full bg-neutral-900">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={avatarImgSrc} className="rounded-full" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Input className={cn("ml-2 bg-neutral-900 border-0 text-neutral-50 focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-b focus-visible:rounded-none")} placeholder="What's in your mind?" />
                </div>
                <div className="flex flex-row ml-14 mr-2 items-center">
                    <CiImageOn className="fill-neutral-50 w-6 h-6 mx-1 hover:cursor-pointer" />
                    <CiVideoOn className="fill-neutral-50 w-6 h-6 mx-1 hover:cursor-pointer" />
                    <BsEmojiSmile className="fill-neutral-50 w-5 h-5 mx-1 mt-0.25 hover:cursor-pointer" />
                    <CiLocationOn className="fill-neutral-50 w-6 h-6 mx-1 hover:cursor-pointer" />
                    <Button variant="outline" className="ml-auto rounded-full">Post</Button>
                </div>
            </CardContent>
        </Card>
    );
}