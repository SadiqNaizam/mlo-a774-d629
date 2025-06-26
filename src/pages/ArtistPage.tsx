import React, { useState } from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import FooterPlayer from '@/components/layout/FooterPlayer';

// Page-specific & Reusable Components
import ContentCard from '@/components/ContentCard';
import SongListItem from '@/components/SongListItem';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

// --- Placeholder Data ---

const artist = {
  name: 'Joji',
  followers: '15,832,194 monthly listeners',
  isVerified: true,
  bannerUrl: 'https://i.scdn.co/image/ab676186000010168f6df52033620943b1712128',
  bio: 'George Kusunoki Miller, known professionally as Joji, is a Japanese singer, songwriter, rapper, comedian, and former YouTuber. Miller\'s music has been described as a mix between R&B, lo-fi, and trip hop.',
};

const popularSongs = [
  { id: 'song1', title: 'Glimpse of Us', artist: 'Joji', album: 'SMITHEREENS', duration: '3:53', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b2738b3b769c5cb46503c3983c31' },
  { id: 'song2', title: 'SLOW DANCING IN THE DARK', artist: 'Joji', album: 'BALLADS 1', duration: '3:29', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b273e90b86a32b904d6f6e5225c0' },
  { id: 'song3', title: 'Die For You', artist: 'Joji', album: 'SMITHEREENS', duration: '3:31', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b2738b3b769c5cb46503c3983c31' },
  { id: 'song4', title: 'Sanctuary', artist: 'Joji', album: 'Nectar', duration: '3:00', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b27346b3f799291f2747b0785194' },
  { id: 'song5', title: 'YEAH RIGHT', artist: 'Joji', album: 'BALLADS 1', duration: '2:54', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b273e90b86a32b904d6f6e5225c0' },
];

const discography = [
  { type: 'album' as 'album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b2738b3b769c5cb46503c3983c31', title: 'SMITHEREENS', subtitle: 'Album • 2022', href: '/playlist' },
  { type: 'album' as 'album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27346b3f799291f2747b0785194', title: 'Nectar', subtitle: 'Album • 2020', href: '/playlist' },
  { type: 'album' as 'album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273e90b86a32b904d6f6e5225c0', title: 'BALLADS 1', subtitle: 'Album • 2018', href: '/playlist' },
  { type: 'album' as 'album', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273898e3538c5b3674b8895529f', title: 'In Tongues', subtitle: 'EP • 2017', href: '/playlist' },
];

const ArtistPage = () => {
  console.log('ArtistPage loaded');
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>('song1'); // Default to playing the first song

  const handlePlay = (songId: string) => {
    setCurrentPlayingId(songId);
    // Here you would typically also trigger a global player context
    console.log(`Playing song: ${songId}`);
  };

  return (
    <div className="grid md:grid-cols-[280px_1fr] h-screen bg-background text-foreground">
      <LeftSidebar className="fixed top-0 left-0 h-full w-[280px]" />
      <div className="md:ml-[280px] flex flex-col overflow-hidden relative">
        <Header />
        <ScrollArea className="flex-1">
          {/* Artist Banner */}
          <section
            className="relative flex h-80 w-full items-end bg-cover bg-center p-8"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${artist.bannerUrl})` }}
          >
            <div className="flex flex-col text-white">
              {artist.isVerified && <span className="text-sm font-bold">Verified Artist</span>}
              <h1 className="text-7xl font-extrabold tracking-tighter">{artist.name}</h1>
              <p className="mt-2 text-lg">{artist.followers}</p>
            </div>
          </section>

          <main className="p-8 bg-gradient-to-b from-neutral-900/50 to-background space-y-12">
            {/* Action Bar */}
            <div className="flex items-center gap-6">
              <Button
                className="rounded-full bg-blue-500 hover:bg-blue-600 p-5"
                onClick={() => handlePlay(popularSongs[0].id)}
              >
                <Play className="h-7 w-7 fill-current text-black" />
              </Button>
              <Button variant="outline" className="border-neutral-500 text-white">
                Follow
              </Button>
            </div>

            {/* Popular Songs */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Popular</h2>
              <div className="flex flex-col gap-1">
                {popularSongs.map((song, index) => (
                  <SongListItem
                    key={song.id}
                    song={song}
                    trackNumber={index + 1}
                    isPlaying={currentPlayingId === song.id}
                    onPlay={handlePlay}
                  />
                ))}
              </div>
            </section>

            {/* Discography */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Discography</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {discography.map((item) => (
                  <ContentCard
                    key={item.title}
                    type={item.type}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    subtitle={item.subtitle}
                    href={item.href}
                  />
                ))}
              </div>
            </section>
            
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">About</h2>
              <div className='p-4 bg-neutral-800 rounded-lg'>
                <p className='text-neutral-300'>{artist.bio}</p>
              </div>
            </section>

          </main>
        </ScrollArea>
        <div className="h-24" /> {/* Spacer for FooterPlayer */}
      </div>
      <FooterPlayer />
    </div>
  );
};

export default ArtistPage;