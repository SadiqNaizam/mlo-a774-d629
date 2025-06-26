import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import FooterPlayer from '@/components/layout/FooterPlayer';

// Custom Components
import ContentCard from '@/components/ContentCard';
import SongListItem from '@/components/SongListItem';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Icons
import { Search as SearchIcon } from 'lucide-react';

// Placeholder Data
const browseCategories = [
    { name: "Pop", color: "bg-red-500" },
    { name: "Hip-Hop", color: "bg-orange-500" },
    { name: "Rock", color: "bg-yellow-500" },
    { name: "Electronic", color: "bg-green-500" },
    { name: "R&B", color: "bg-teal-500" },
    { name: "K-Pop", color: "bg-cyan-500" },
    { name: "Indie", color: "bg-blue-500" },
    { name: "Classical", color: "bg-indigo-500" },
    { name: "Jazz", color: "bg-purple-500" },
    { name: "Focus", color: "bg-pink-500" },
    { name: "Chill", color: "bg-sky-500" },
    { name: "Workout", color: "bg-lime-500" },
];

const sampleSongs = [
    { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36' },
    { id: '2', title: 'As It Was', artist: 'Harry Styles', album: 'Harry\'s House', duration: '2:47', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b273b46f74097655d7f353caab14' },
    { id: '3', title: 'good 4 u', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58', artworkUrl: 'https://i.scdn.co/image/ab67616d0000b273a105eda965a7802c61e514c3' },
];

const sampleArtists = [
    { imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36', title: 'Taylor Swift', subtitle: 'Artist', href: '/artist', type: 'artist' as 'artist' },
    { imageUrl: 'https://i.scdn.co/image/ab6761610000e5ebd8a1c93585f02d4d3345d47f', title: 'Drake', subtitle: 'Artist', href: '/artist', type: 'artist' as 'artist' },
];

const sampleAlbums = [
    { imageUrl: 'https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7355b2', title: 'Midnights', subtitle: 'Taylor Swift', href: '/playlist', type: 'album' as 'album' },
    { imageUrl: 'https://i.scdn.co/image/ab67616d0000b2739532f3377a0633328211604d', title: 'Certified Lover Boy', subtitle: 'Drake', href: '/playlist', type: 'album' as 'album' },
];

const SearchPage = () => {
    console.log('SearchPage loaded');
    const [searchQuery, setSearchQuery] = useState('');
    const [playingSongId, setPlayingSongId] = useState<string | null>(null);

    const handlePlay = (songId: string) => {
        setPlayingSongId(songId);
        console.log(`Playing song ${songId}`);
    };

    return (
        <div className="grid md:grid-cols-[280px_1fr] h-screen bg-background text-foreground">
            <LeftSidebar className="h-full" />
            <div className="flex flex-col h-screen">
                <Header />
                <ScrollArea className="flex-1">
                    <main className="p-6 space-y-8">
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="What do you want to listen to?"
                                className="pl-10 h-12 text-lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {!searchQuery && (
                            <section>
                                <h2 className="text-2xl font-bold mb-4">Browse all</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                                    {browseCategories.map((category) => (
                                        <Link to="/playlist" key={category.name} className={`relative rounded-lg overflow-hidden h-40 p-4 font-bold text-white text-2xl ${category.color}`}>
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}
                        
                        {searchQuery && (
                            <Tabs defaultValue="all" className="w-full">
                                <TabsList>
                                    <TabsTrigger value="all">All</TabsTrigger>
                                    <TabsTrigger value="songs">Songs</TabsTrigger>
                                    <TabsTrigger value="artists">Artists</TabsTrigger>
                                    <TabsTrigger value="albums">Albums</TabsTrigger>
                                    <TabsTrigger value="playlists">Playlists</TabsTrigger>
                                </TabsList>
                                <TabsContent value="all" className="mt-6 space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Top Results</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                             <div className="space-y-2">
                                                {sampleSongs.slice(0, 2).map((song, index) => (
                                                    <SongListItem key={song.id} song={song} trackNumber={index + 1} isPlaying={playingSongId === song.id} onPlay={handlePlay} />
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                {sampleArtists.slice(0, 2).map(item => <ContentCard key={item.title} {...item} />)}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="songs" className="mt-6 space-y-2">
                                     {sampleSongs.map((song, index) => (
                                        <SongListItem key={song.id} song={song} trackNumber={index + 1} isPlaying={playingSongId === song.id} onPlay={handlePlay} />
                                    ))}
                                </TabsContent>
                                <TabsContent value="artists" className="mt-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        {sampleArtists.map(item => <ContentCard key={item.title} {...item} />)}
                                    </div>
                                </TabsContent>
                                <TabsContent value="albums" className="mt-6">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        {sampleAlbums.map(item => <ContentCard key={item.title} {...item} />)}
                                    </div>
                                </TabsContent>
                                <TabsContent value="playlists" className="mt-6">
                                     <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        {sampleAlbums.map(item => <ContentCard key={item.title} {...item} subtitle="Playlist" type="playlist"/>)}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        )}
                    </main>
                </ScrollArea>
            </div>
            <FooterPlayer />
        </div>
    );
};

export default SearchPage;