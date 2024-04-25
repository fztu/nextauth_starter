"use client";
import { UserRole } from "@prisma/client";
import { FormSuccess } from "@/components/auth/form-success";
import { RoleGate } from "@/components/auth/role-gate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const AdminPage = () => {
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
                    <Button>
                        Click to test
                    </Button>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                    <p className="text-sm font-medium">
                        Admin-only server action
                    </p>
                    <Button>
                        Click to test
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default AdminPage;