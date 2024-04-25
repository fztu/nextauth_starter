import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
    return ( 
        <CardWrapper
            headerTitle="Error"
            headerLabel="Oops, something went wrong!"
            backButtonLabel="Go back"
            backButtonHref="/auth/login"
        >
            <div className="flex w-full justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>
    );
}
 
export default ErrorCard;