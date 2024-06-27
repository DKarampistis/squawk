import { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CiImageOn, CiVideoOn, CiLocationOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { PiRobotLight } from "react-icons/pi";
import { query } from "@/lib/fetchHuggingFace";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePost({ avatarImgSrc, addPost }: any) {
    const [inputValue, setInputValue] = useState("");
    const [queryResult, setQueryResult] = useState(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handlePost = () => {
        const newPost = {
            avatarImgSrc,
            name: "Dimitris Karampistis",
            username: "@dimitris_karampistis",
            postContent: inputValue,
        };
        addPost(newPost);
        setInputValue(""); // Clear the input field
    };

    const resizeTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        resizeTextarea();
    }, [inputValue]);

    const handleIconClick = async (iconName: string) => {
        if (iconName === "robot") {
            try {
                const response = await query({ inputs: inputValue });
                if (response && response[0] && response[0].generated_text) {
                    const generatedText = response[0].generated_text;
                    setInputValue(generatedText);
                }
                setQueryResult(response);
                console.log("Query Result:", response);
            } catch (error) {
                console.error("Error querying Hugging Face API:", error);
            }
        } else {
            console.log(`${iconName} icon clicked`);
        }
    };

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
                    <Textarea 
                        ref={textareaRef}
                        className={cn("ml-2 bg-neutral-900 border-0 text-neutral-50 focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-b focus-visible:rounded-none")}
                        placeholder="What's in your mind?"
                        value={inputValue}
                        onChange={handleInputChange}
                        style={{ overflow: 'hidden' }}
                    />
                </div>
                <div className="flex flex-row ml-14 mr-2 items-center">
                    <button onClick={() => handleIconClick("image")} title="Add an image">
                        <CiImageOn className="fill-neutral-50 w-6 h-6 mx-1 hover:cursor-pointer" />
                    </button>
                    <button onClick={() => handleIconClick("video")} title="Add a video">
                        <CiVideoOn className="fill-neutral-50 w-6 h-6 mx-1 hover:cursor-pointer" />
                    </button>
                    <button onClick={() => handleIconClick("emoji")} title="Add an emoji">
                        <BsEmojiSmile className="fill-neutral-50 w-5 h-5 mx-1 mt-0.25 hover:cursor-pointer" />
                    </button>
                    <button onClick={() => handleIconClick("location")} title="Add a location">
                        <CiLocationOn className="fill-neutral-50 w-6 h-6 mx-1 hover:cursor-pointer" />
                    </button>
                    <button onClick={() => handleIconClick("robot")} title="Generate text">
                        <PiRobotLight className="fill-neutral-50 w-6 h-6 mx-1 hover:cursor-pointer" />
                    </button>
                    <Button 
                        variant="outline" 
                        className="ml-auto rounded-full"
                        disabled={!inputValue.trim()}
                        onClick={handlePost}
                    >
                        Post
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
