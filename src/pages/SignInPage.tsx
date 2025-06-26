import React from 'react';
import { useAuth } from '@/components/auth/AuthProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ListMusic } from 'lucide-react';

const SignInPage = () => {
  const { login } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <Card className="w-full max-w-sm bg-card text-card-foreground">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <ListMusic className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">Welcome to DoraTunes</CardTitle>
          <CardDescription>Sign in to continue to your music.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button onClick={login} className="w-full" size="lg">
              Sign In with Microsoft
            </Button>
            <p className="px-8 text-center text-xs text-muted-foreground">
              This is a simulated sign-in. Clicking the button will grant you access without real authentication.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;