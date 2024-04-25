import { Navbar } from "@/app/(protected)/_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return ( 
        <div className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#191919] to-[#2d374c]">
            <Navbar />
            {children}
        </div>
     );
}
 
export default ProtectedLayout;