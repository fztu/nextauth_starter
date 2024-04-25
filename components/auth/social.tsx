"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRCT } from "@/routes";

export const Social = () => {
    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRCT,
        });
    }
    return (
        <div className="flex flex-col gap-y-4 w-full">
            <div className="flex items-center w-full">
                <Button
                    size="lg"
                    className="w-full"
                    variant="outline"
                    onClick={() => onClick("google")}
                >
                    <FcGoogle className="w-5 h-5"/>
                    <span className="ml-2">Continue with Google</span>
                </Button>
            </div>
            <div className="flex items-center w-full">
                <Button
                    size="lg"
                    className="w-full"
                    variant="outline"
                    onClick={() => onClick("github")}
                >
                    <FaGithub className="w-5 h-5"/>
                    <span className="ml-2">Continue with GitHub</span>
                </Button>
            </div>
        </div>
        
    )
}