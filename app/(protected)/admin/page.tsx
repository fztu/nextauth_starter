"use client";
import { UserRole } from "@prisma/client";
import { FormSuccess } from "@/components/auth/form-success";
import { RoleGate } from "@/components/auth/role-gate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast } from "sonner";
import { admin } from "@/actions/admin";

const AdminPage = () => {
    const onApiRouteClick = () => {
        fetch('/api/admin')
            .then((response) => {
                if (response.ok) {
                    // return response.json();
                    console.log("Admin API route successful");
                    toast.success("Admin API route successful!");
                } else {
                    console.log("Admin API route failed");
                    toast.error("Forbidden!");
                }
            })
    };

    const onServerActionClick = () => {
        admin()
            .then((data) => {
                if (data.error) {
                    toast.error(data.error);
                }

                if (data.success) {
                    toast.success(data.success);
                }
            })
    }

    return (
        <Card className="w-[600px]">
            <CardHeader>
                <p className="text-lg font-semibold text-center">
                    Admin
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowedRole={UserRole.ADMIN}>
                    <FormSuccess message="Admin content"/>
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">
                        Admin-only API route
                    </p>
                    <Button onClick={onApiRouteClick}>
                        Click to test
                    </Button>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">
                        Admin-only server action
                    </p>
                    <Button onClick={onServerActionClick}>
                        Click to test
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default AdminPage;