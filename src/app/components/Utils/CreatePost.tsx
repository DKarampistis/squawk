import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

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
                    <Input className={cn("ml-2 bg-neutral-900 border-none text-neutral-50 focus-visible:ring-offset-0 focus-visible:ring-0")} placeholder="What's in your mind?" />
                </div>
            </CardContent>
        </Card>
    );
}