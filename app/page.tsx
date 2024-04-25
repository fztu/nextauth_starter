import { Poppins } from "next/font/google"
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({ 
  subsets: ["latin"],
  weight: ["600"]
})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#191919] to-[#2d374c]">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
          Auth
        </h1>
        <p className="text-white text-lg">
          Get start with NextAuth
        </p>
        <div>
          <LoginButton mode="redirect">
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
