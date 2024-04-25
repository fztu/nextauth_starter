/**
 * An array of routes that are publicly accessible
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/forgot-password",
    "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that starts with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect URL after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRCT = "/settings";