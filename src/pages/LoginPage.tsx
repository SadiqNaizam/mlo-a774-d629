import React from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/authConfig";
import { Button } from "@/components/ui/button";
import { ListMusic } from 'lucide-react';

const LoginPage: React.FC = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.error(e);
        });
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-neutral-900 text-white">
            <div className="text-center p-8 bg-neutral-800 rounded-lg shadow-xl">
                 <div className="flex items-center justify-center gap-3 mb-6">
                    <ListMusic className="h-10 w-10 text-red-500" />
                    <h1 className="text-4xl font-bold">DoraTunes</h1>
                </div>
                <p className="text-neutral-300 mb-8">
                    Sign in to access your music library, playlists, and more.
                </p>
                <Button size="lg" onClick={handleLogin} className="bg-red-600 hover:bg-red-700">
                    Sign In with Microsoft
                </Button>
            </div>
        </div>
    );
};

export default LoginPage;