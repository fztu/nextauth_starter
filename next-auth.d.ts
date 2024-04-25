import { UserRole } from "@prisma/client";
import NextAuth, {type DefaultSession} from "next-auth";

export type ExtendedUser = {
    role: UserRole;
    isTwoFactorEnabled: boolean;
}

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: ExtendedUser;
    }
}