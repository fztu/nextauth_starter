"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";


const ClientPage = () => {
    const user = useCurrentUser();
    console.log(user);
    return ( 
        <UserInfo 
            user={user} 
            label="Client Component"
        />
     );
}
 
export default ClientPage;
// export const runtime = 'edge';