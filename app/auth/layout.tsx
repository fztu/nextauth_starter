const AuthLayout = ({ 
    children 
}: { 
    children: 
    React.ReactNode 
}) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#191919] to-[#2d374c]">
            {children}
        </div>
     );
}
 
export default AuthLayout;