import React, { useState } from 'react';

// Custom Components
import ContentCard from '@/components/ContentCard';
import SongListItem from '@/components/SongListItem';

// shadcn/ui Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Placeholder Data
const placeholderPlaylists = [
  { id: 'p1', title: 'Chill Mix', subtitle: 'Your personal soundtrack for relaxing.', imageUrl: 'https://i.scdn.co/image/ab67706f00000002b70e0223f56476dd1d5a32ea', href: '/playlist' },
  { id: 'p2', title: 'Focus Flow', subtitle: 'Instrumental beats to help you concentrate.', imageUrl: 'https://i.scdn.co/image/ab67706f00000002e435ce0a8bff93a286867d65', href: '/playlist' },
  { id: 'p3', title: 'Workout', subtitle: 'High-energy tracks to get you moving.', imageUrl: 'https://i.scdn.co/image/ab67706f00000002921a9775586bb9b743388a4e', href: '/playlist' },
];

const placeholderAlbums = [
  { id: 'a1', title: 'Nectar', subtitle: 'Joji', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02ff943864a74a1236a041f98c', href: '/playlist' },
  { id: 'a2', title: 'After Hours', subtitle: 'The Weeknd', imageUrl: 'https://i.scdn.co/image/ab67616d00001e028863bc21ac74154915645936', href: '/playlist' },
  { id: 'a3', title: 'SOS', subtitle: 'SZA', imageUrl: 'https://i.scdn.co/image/ab67616d00001e02c414a33979720b073e5e3a09', href: '/playlist' },
];

const placeholderArtists = [
  { id: 'ar1', title: 'Doraemon', subtitle: 'Artist', imageUrl: 'https://i.scdn.co/image/ab676161000051747e71cf4e69e4a3c222238411', href: '/artist', type: 'artist' as 'artist' },
  { id: 'ar2', title: 'Nobita', subtitle: 'Artist', imageUrl: 'https://i.scdn.co/image/ab67616100005174a701835848554313175c5678', href: '/artist', type: 'artist' as 'artist' },
  { id: 'ar3', title: 'Shizuka', subtitle: 'Artist', imageUrl: 'https://i.scdn.co/image/ab6761610000517496c98912a76f5773693e54b6', href: '/artist', type: 'artist' as 'artist' },
];

const placeholderLikedSongs = [
  { id: 's1', title: 'Glimpse of Us', artist: 'Joji', album: 'Nectar', duration: '3:53', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b2738b3b769c5cb46503c3983c31' },
  { id: 's2', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc21ac74154915645936' },
  { id: 's3', title: 'Kill Bill', artist: 'SZA', album: 'SOS', duration: '2:33', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b273c414a33979720b073e5e3a09' },
];

const LibraryPage = () => {
  console.log('LibraryPage loaded');
  const [playingSongId, setPlayingSongId] = useState<string | null>('s2'); // Default to one song playing

  const handlePlay = (songId: string) => {
    setPlayingSongId(songId);
    // Here you would typically also trigger the global player context
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Library</h1>
      <Tabs defaultValue="playlists" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="songs">Liked Songs</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
          <TabsTrigger value="artists">Artists</TabsTrigger>
        </TabsList>
        
        <TabsContent value="playlists">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {placeholderPlaylists.map(playlist => (
              <ContentCard key={playlist.id} {...playlist} type="playlist" />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="songs">
          <div className="flex flex-col gap-1">
            {placeholderLikedSongs.map((song, index) => (
              <SongListItem 
                key={song.id}
                song={song}
                trackNumber={index + 1}
                isPlaying={playingSongId === song.id}
                onPlay={handlePlay}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="albums">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {placeholderAlbums.map(album => (
              <ContentCard key={album.id} {...album} type="album" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="artists">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {placeholderArtists.map(artist => (
              <ContentCard key={artist.id} {...artist} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default LibraryPage;