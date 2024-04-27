import authConfig from "@/auth.config"
import NextAuth from "next-auth"

const { auth } = NextAuth(authConfig);
import {
    DEFAULT_LOGIN_REDIRCT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes
} from "@/routes";
import { NextRequest, NextResponse } from "next/server";

export default auth((req): any => {
    // return null;
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    // console.log("URL Pathname: ", nextUrl.pathname);
    // console.log("isPublicRoute: ", isPublicRoute);

    if (isApiAuthRoute) { return null; }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRCT, nextUrl));
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoute) {
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl = callbackUrl + nextUrl.search;
        }
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);

        return NextResponse.redirect(new URL(
            `/auth/login?callbackUrl=${encodedCallbackUrl}`, 
            nextUrl
        ));
    }

    return null;
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}