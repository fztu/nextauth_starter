"use client";

import { 
    Card,
    CardContent,
    CardHeader,
    CardFooter
} from "@/components/ui/card";
import { BackButton } from "./back-button";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerTitle: string;
    headerLabel?: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerTitle,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial = true,
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md bg-gray-50">
            <CardHeader>
                <Header 
                    title={headerTitle}
                    label={headerLabel} 
                />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton
                    href={backButtonHref}
                    label={backButtonLabel}
                >

                </BackButton>
            </CardFooter>
        </Card>
    )
}