import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function JoinCard() {
  return (
    <div>
        <Card className="w-[350px]">
        <CardHeader>
            <CardTitle>Join Squawk now!</CardTitle>
            <CardDescription>Express your thoughts without limitations.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
            <Button className="w-full p-4 flex items-center justify-center">
            <FaGoogle className="mr-2 h-4 w-4" />
            Sign up with Google!
            </Button>
            <Button className="w-full p-4 flex items-center justify-center">
            <FaFacebookF className="mr-2 h-4 w-4" />
            Sign up with Facebook!
            </Button>
            <div className="flex flex-col items-center space-y-2">
                <span>or</span>
                <Button className="w-full">
                    <MdOutlineEmail className="mr-2 h-4 w-4" />
                    Sign up with Email!
                </Button>
            </div>
        </CardContent>
        <CardFooter className="text-xs">
            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
        </CardFooter>
        </Card>
        <div className="p-6">
            <p className="text-lg text-center text-bold text-white pb-2">Already have an account?</p>
            <Button variant={"outline"} className="w-full"> Sign in! </Button>
        </div>
    </div>
  );
}
