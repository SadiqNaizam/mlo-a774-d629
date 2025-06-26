import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Search, Library, Plus, ListMusic } from 'lucide-react';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const LeftSidebar: React.FC<SidebarProps> = ({ className }) => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
      isActive && 'bg-muted text-primary'
    );

  const placeholderPlaylists = [
    'Liked Songs', 'Chill Mix', 'Focus Flow', '80s Rock Anthems', 'Acoustic Hits', 'Indie Pop', 'Lo-fi Beats', 'Workout', 'Classical Essentials', 'Jazz Vibes', 'Road Trip'
  ];

  return (
    <div className={cn('hidden md:block h-screen bg-card text-card-foreground border-r', className)}>
      <div className="flex h-full max-h-screen flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <ListMusic className="h-6 w-6 text-blue-500" />
            <span>DoraTunes</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavLink to="/" className={navLinkClasses}>
              <Home className="h-4 w-4" />
              Home
            </NavLink>
            <NavLink to="/search" className={navLinkClasses}>
              <Search className="h-4 w-4" />
              Search
            </NavLink>
            <NavLink to="/library" className={navLinkClasses}>
              <Library className="h-4 w-4" />
              Your Library
            </NavLink>
          </nav>
        </div>
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
            <div className='flex justify-between items-center px-4'>
                <h2 className="text-lg font-semibold tracking-tight">Playlists</h2>
                <Button variant="ghost" size="icon">
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Create Playlist</span>
                </Button>
            </div>
          <ScrollArea className="px-4">
            <div className="space-y-1 pb-4">
              {placeholderPlaylists.map((playlist) => (
                <Button
                  key={playlist}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  asChild
                >
                  <Link to="/playlist">{playlist}</Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;