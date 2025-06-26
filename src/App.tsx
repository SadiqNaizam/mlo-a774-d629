import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

// Layout and Pages
import MainLayout from "./components/layout/MainLayout";
import ArtistPage from "./pages/ArtistPage";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import PlaylistPage from "./pages/PlaylistPage";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";

/**
 * IMPORTANT: To use MSAL, you must install the necessary packages. Run:
 * 
 * npm install @azure/msal-browser @azure/msal-react
 * 
 * or the equivalent for your package manager.
 */

const queryClient = new QueryClient();
const msalInstance = new PublicClientApplication(msalConfig);

const App = () => (
  <MsalProvider instance={msalInstance}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/artist" element={<ArtistPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/playlist" element={<PlaylistPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Route>
            {/* catch-all should be outside the main layout */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </MsalProvider>
);

export default App;