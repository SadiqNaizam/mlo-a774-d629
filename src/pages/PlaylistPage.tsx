import React, { useState } from 'react';
import { Play, Clock } from 'lucide-react';

// Import Custom Components
import SongListItem from '@/components/SongListItem';

// Import shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// --- Placeholder Data ---

const playlistDetails = {
  name: "Doraemon's Pocket Mix",
  creator: 'Doraemon',
  description: 'A collection of futuristic and classic tunes from the 22nd century.',
  coverArtUrl: 'https://i.pinimg.com/736x/f8/e0/75/f8e075c3523273e34399e74d32e92a8e.jpg',
  totalSongs: 5,
  totalDuration: '18 min',
};

const songs = [
  {
    id: '1',
    title: 'Hizuke wo Koete',
    artist: 'Sue-g',
    album: 'Doraemon 2021 OST',
    duration: '3:45',
    artworkUrl: 'https://i.scdn.co/image/ab67616d0000b2734e5df11b5e43d2fed85c34a1',
  },
  {
    id: '2',
    title: 'Niji',
    artist: 'Masaki Suda',
    album: 'Stand by Me Doraemon 2',
    duration: '4:21',
    artworkUrl: 'https://i.scdn.co/image/ab67616d0000b2738734e06385f0b5220d91b49f',
  },
  {
    id: '3',
    title: 'Himawari no Yakusoku',
    artist: 'Motohiro Hata',
    album: 'Stand by Me Doraemon',
    duration: '5:15',
    artworkUrl: 'https://i.scdn.co/image/ab67616d0000b273e9e9a4f4e7e7e7e7e7e7e7e7',
  },
  {
    id: '4',
    title: 'Boku no Nooto',
    artist: 'Sukima Switch',
    album: 'Doraemon: Nobita\\'s Dinosaur 2006',
    duration: '3:58',
    artworkUrl: 'https://i.scdn.co/image/ab67616d0000b273b1b1b1b1b1b1b1b1b1b1b1b1',
  },
  {
    id: '5',
    title: 'Yume wo Kanaete Doraemon',
    artist: 'MAO',
    album: 'Doraemon 2007 Series',
    duration: '2:30',
    artworkUrl: 'https://i.scdn.co/image/ab67616d0000b273a2a2a2a2a2a2a2a2a2a2a2a2',
  },
];

const PlaylistPage = () => {
  console.log('PlaylistPage loaded');
  const [nowPlayingId, setNowPlayingId] = useState<string | null>('2'); // Default to playing one song

  const handlePlay = (songId: string) => {
    setNowPlayingId(songId);
    console.log(`Playing song with ID: ${songId}`);
    // In a real app, you would also trigger the audio player service here
  };

  return (
    <div className="relative">
      {/* Playlist Header Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 p-8 bg-gradient-to-b from-blue-700 via-blue-800 to-background">
        <img
          src={playlistDetails.coverArtUrl}
          alt={`Cover for ${playlistDetails.name}`}
          className="w-48 h-48 md:w-56 md:h-56 rounded-lg shadow-2xl object-cover"
        />
        <div className="flex flex-col gap-3 text-center md:text-left">
          <span className="text-sm font-bold text-white">PLAYLIST</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter">
            {playlistDetails.name}
          </h1>
          <p className="text-gray-200">{playlistDetails.description}</p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300 mt-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://i.pinimg.com/originals/f3/90/33/f39033d366f3162b71ae02e1c9439f01.png" alt="Doraemon" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
            <span>{playlistDetails.creator}</span>
            <span>•</span>
            <span>{playlistDetails.totalSongs} songs,</span>
            <span className="text-gray-400">{playlistDetails.totalDuration}</span>
          </div>
        </div>
      </section>

      {/* Action Bar & Track List */}
      <div className="p-8 bg-background/80 backdrop-blur-sm">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full h-14 w-14 mb-8">
            <Play className="h-7 w-7 fill-white text-white" />
          </Button>

        {/* Track List Header */}
        <div className="grid grid-cols-[3rem_1fr_1fr_auto] gap-4 px-2 mb-4 text-sm text-muted-foreground border-b pb-2">
            <div className="text-center">#</div>
            <div>Title</div>
            <div className="hidden md:block">Album</div>
            <div className="flex justify-end"><Clock className="h-4 w-4" /></div>
        </div>

        {/* Track List */}
        <div className="flex flex-col gap-1">
          {songs.map((song, index) => (
            <SongListItem
              key={song.id}
              song={song}
              trackNumber={index + 1}
              isPlaying={song.id === nowPlayingId}
              onPlay={handlePlay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistPage;