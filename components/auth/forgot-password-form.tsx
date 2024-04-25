"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"; 
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";

import { PasswordResetSchema } from "@/schemas";
import { resetPassword } from "@/actions/password-reset";


export const ForgotPasswordForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof PasswordResetSchema>>({
        resolver: zodResolver(PasswordResetSchema),
        defaultValues: {
            email: ""
        }
    });

    const onSubmit = (values: z.infer<typeof PasswordResetSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            console.log(values);
            resetPassword(values)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success);
                })
        });
    }

    return (
        <CardWrapper
            headerTitle="Forgot your password"
            headerLabel=""
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
            showSocial={false}
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field} 
                                            disabled={isPending}
                                            placeholder="john.doe@me.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError 
                        message={error}
                    />
                    <FormSuccess 
                        message={success}
                    />
                    <Button 
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Send reset email
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}