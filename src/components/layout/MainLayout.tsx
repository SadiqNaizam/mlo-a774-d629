import React from 'react';
import { Outlet } from "react-router-dom";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

import LeftSidebar from "./LeftSidebar";
import FooterPlayer from "./FooterPlayer";
import Header from "./Header";
import LoginPage from "@/pages/LoginPage";
import { ScrollArea } from "@/components/ui/scroll-area";

const MainLayout: React.FC = () => {
  return (
    <>
      <AuthenticatedTemplate>
        <div className="grid md:grid-cols-[280px_1fr] h-screen bg-neutral-900 text-white font-sans">
          <LeftSidebar className="hidden md:block fixed top-0 left-0 h-full w-[280px]" />
          <div className="md:pl-[280px] flex flex-col h-screen overflow-hidden">
            <div className="relative flex-1 flex flex-col overflow-hidden">
              <Header />
              <ScrollArea className="flex-1 pb-24">
                {/* The Outlet renders the current page's content */}
                <Outlet />
              </ScrollArea>
            </div>
          </div>
          <FooterPlayer />
        </div>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <LoginPage />
      </UnauthenticatedTemplate>
    </>
  );
};

export default MainLayout;