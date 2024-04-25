"use client";

import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { newVerification } from "@/actions/new-verification";

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const onSubmit = useCallback(() => {
        console.log(token);
        if (success || error) return;

        if (!token) {
            setError("Missing token");
            return;
        }
        newVerification(token)
            .then((data) => {
                setSuccess(data?.success);
                setError(data?.error);
            })
            .catch(() => {
                setError("Something went wrong!");
            })
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);
    return (
        <CardWrapper
            headerTitle="Auth"
            headerLabel="Confirming your verification"
            backButtonLabel="Back to login"
            backButtonHref="/auth/login"
            showSocial={false}
        >
            <div className="flex w-full justify-center items-center">
                {!success && !error && <BeatLoader />}
                <FormSuccess message={success} />
                { !success && <FormError message={error} />}
            </div>
        </CardWrapper>
    )
}