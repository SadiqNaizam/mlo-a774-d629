import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import FooterPlayer from '@/components/layout/FooterPlayer';

// Custom UI Components
import ContentCard from '@/components/ContentCard';

// shadcn/ui Components
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Placeholder Data
const featuredPlaylists = [
  {
    imageUrl: 'https://picsum.photos/seed/playlist1/300/300',
    title: 'Doraemon\'s Pocket Hits',
    subtitle: 'A collection of futuristic tunes.',
    href: '/playlist',
    type: 'playlist' as const,
  },
  {
    imageUrl: 'https://picsum.photos/seed/playlist2/300/300',
    title: 'Chillhop Lo-fi',
    subtitle: 'Relax, study, or focus with these beats.',
    href: '/playlist',
    type: 'playlist' as const,
  },
  {
    imageUrl: 'https://picsum.photos/seed/playlist3/300/300',
    title: 'Pop Rising',
    subtitle: 'The hottest new tracks from around the globe.',
    href: '/playlist',
    type: 'playlist' as const,
  },
  {
    imageUrl: 'https://picsum.photos/seed/playlist4/300/300',
    title: '80s Rock Anthems',
    subtitle: 'Headbangers and power ballads.',
    href: '/playlist',
    type: 'playlist' as const,
  },
  {
    imageUrl: 'https://picsum.photos/seed/playlist5/300/300',
    title: 'Acoustic Morning',
    subtitle: 'Start your day with soft, soothing sounds.',
    href: '/playlist',
    type: 'playlist' as const,
  },
];

const newReleases = [
  {
    imageUrl: 'https://picsum.photos/seed/album1/300/300',
    title: 'Future Nostalgia',
    subtitle: 'Dua Lipa',
    href: '/artist',
    type: 'album' as const,
  },
  {
    imageUrl: 'https://picsum.photos/seed/album2/300/300',
    title: 'After Hours',
    subtitle: 'The Weeknd',
    href: '/artist',
    type: 'album' as const,
  },
  {
    imageUrl: 'https://picsum.photos/seed/album3/300/300',
    title: 'Montero',
    subtitle: 'Lil Nas X',
    href: '/artist',
    type: 'album' as const,
  },
  {
    imageUrl: 'https://picsum.photos/seed/album4/300/300',
    title: 'Sour',
    subtitle: 'Olivia Rodrigo',
    href: '/artist',
    type: 'album' as const,
  },
  {
    imageUrl: 'https://picsum.photos/seed/album5/300/300',
    title: 'Evermore',
    subtitle: 'Taylor Swift',
    href: '/artist',
    type: 'album' as const,
  },
];

const topArtists = [
    {
      imageUrl: 'https://picsum.photos/seed/artist1/300/300',
      title: 'Billie Eilish',
      subtitle: 'Artist',
      href: '/artist',
      type: 'artist' as const,
    },
    {
      imageUrl: 'https://picsum.photos/seed/artist2/300/300',
      title: 'Drake',
      subtitle: 'Artist',
      href: '/artist',
      type: 'artist' as const,
    },
    {
      imageUrl: 'https://picsum.photos/seed/artist3/300/300',
      title: 'Joji',
      subtitle: 'Artist',
      href: '/artist',
      type: 'artist' as const,
    },
    {
        imageUrl: 'https://picsum.photos/seed/artist4/300/300',
        title: 'Ariana Grande',
        subtitle: 'Artist',
        href: '/artist',
        type: 'artist' as const,
    },
    {
        imageUrl: 'https://picsum.photos/seed/artist5/300/300',
        title: 'Post Malone',
        subtitle: 'Artist',
        href: '/artist',
        type: 'artist' as const,
    },
];

const HomePage: React.FC = () => {
  console.log('HomePage loaded');

  return (
    <div className="grid md:grid-cols-[280px_1fr] h-screen bg-neutral-900 text-white font-sans">
      <LeftSidebar className="hidden md:block fixed top-0 left-0 h-full w-[280px]" />
      
      <main className="md:pl-[280px] flex flex-col h-screen">
        <div className="relative flex-1 flex flex-col overflow-hidden">
            <Header />
            <ScrollArea className="flex-1 px-6 pb-24">
              <div className="space-y-8 py-6">
                {/* Featured Playlists Section */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
                  <Carousel opts={{ align: 'start' }} className="w-full">
                    <CarouselContent>
                      {featuredPlaylists.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <ContentCard {...item} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-10px]"/>
                    <CarouselNext className="right-[-10px]"/>
                  </Carousel>
                </section>

                {/* New Releases Section */}
                <section>
                  <h2 className="text-2xl font-bold mb-4">New Releases</h2>
                   <Carousel opts={{ align: 'start' }} className="w-full">
                    <CarouselContent>
                      {newReleases.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <ContentCard {...item} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-10px]"/>
                    <CarouselNext className="right-[-10px]"/>
                  </Carousel>
                </section>

                 {/* Top Artists Section */}
                 <section>
                  <h2 className="text-2xl font-bold mb-4">Top Artists</h2>
                   <Carousel opts={{ align: 'start' }} className="w-full">
                    <CarouselContent>
                      {topArtists.map((item, index) => (
                        <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                          <ContentCard {...item} />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-10px]"/>
                    <CarouselNext className="right-[-10px]"/>
                  </Carousel>
                </section>
              </div>
            </ScrollArea>
        </div>
        <FooterPlayer />
      </main>
    </div>
  );
};

export default HomePage;