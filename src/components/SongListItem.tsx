import React from 'react';
import { Play } from 'lucide-react';

// Define the shape of a song object for type safety
interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string; // e.g., "3:45"
  artworkUrl: string;
}

// Define the props for the SongListItem component
interface SongListItemProps {
  song: Song;
  trackNumber: number;
  isPlaying: boolean;
  onPlay: (songId: string) => void;
}

const SongListItem: React.FC<SongListItemProps> = ({ song, trackNumber, isPlaying, onPlay }) => {
  console.log('SongListItem loaded for:', song.title);

  // Base classes for the row
  const baseClasses = "grid grid-cols-[3rem_1fr_1fr_auto] gap-4 items-center p-2 rounded-md transition-colors duration-200 group";
  
  // Classes to apply when the song is the currently playing one
  const activeClasses = isPlaying 
    ? "bg-blue-100/80 dark:bg-blue-900/50" 
    : "hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer";

  // Classes for text color when the song is playing
  const titleColorClass = isPlaying ? "text-blue-600 dark:text-blue-300 font-bold" : "text-gray-900 dark:text-gray-50";
  const textColorClass = isPlaying ? "text-blue-500 dark:text-blue-400" : "text-gray-500 dark:text-gray-400";

  const handleRowClick = () => {
    if (!isPlaying) {
      onPlay(song.id);
    }
  };

  return (
    <div className={`${baseClasses} ${activeClasses}`} onClick={handleRowClick} role="button" tabIndex={0} aria-label={`Play ${song.title} by ${song.artist}`}>
      {/* Column 1: Track Number / Play Button */}
      <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
        <span className="group-hover:hidden">{trackNumber}</span>
        <button 
          onClick={(e) => { e.stopPropagation(); onPlay(song.id); }} 
          className="hidden group-hover:block text-gray-800 dark:text-gray-200"
          aria-label={`Play ${song.title}`}
        >
          <Play className="h-5 w-5" fill="currentColor" />
        </button>
      </div>

      {/* Column 2: Artwork, Title & Artist */}
      <div className="flex items-center gap-4 truncate">
        <img src={song.artworkUrl || 'https://via.placeholder.com/40'} alt={`Album art for ${song.album}`} className="h-10 w-10 rounded" />
        <div className="truncate">
          <p className={`truncate font-medium ${titleColorClass}`}>{song.title}</p>
          <p className={`truncate text-sm ${textColorClass}`}>{song.artist}</p>
        </div>
      </div>

      {/* Column 3: Album */}
      <div className={`truncate text-sm hidden md:block ${textColorClass}`}>
        {song.album}
      </div>

      {/* Column 4: Duration */}
      <div className={`text-sm ${textColorClass}`}>
        {song.duration}
      </div>
    </div>
  );
};

export default SongListItem;