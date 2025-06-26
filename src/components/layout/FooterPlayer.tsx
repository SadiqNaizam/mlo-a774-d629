import React, { useState } from 'react';
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Heart,
  MicVocal,
  ListMusic,
  Laptop2,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const FooterPlayer: React.FC = () => {
  console.log('FooterPlayer loaded');
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(50);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between">
        {/* Song Info */}
        <div className="flex items-center gap-4 w-1/4">
          <Avatar className="h-14 w-14 rounded-md">
            <AvatarImage src="https://i.scdn.co/image/ab67616d0000b2738b3b769c5cb46503c3983c31" alt="Album Art" />
            <AvatarFallback>DT</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Link to="/playlist" className="font-semibold hover:underline">
              Glimpse of Us
            </Link>
            <Link to="/artist" className="text-sm text-muted-foreground hover:underline">
              Joji
            </Link>
          </div>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center gap-2 w-1/2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Shuffle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="h-10 w-10 rounded-full"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Repeat className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex w-full items-center gap-2">
            <span className="text-xs text-muted-foreground">1:34</span>
            <Slider defaultValue={[45]} max={100} step={1} />
            <span className="text-xs text-muted-foreground">3:53</span>
          </div>
        </div>

        {/* Volume & Other Controls */}
        <div className="flex items-center justify-end gap-2 w-1/4">
          <Button variant="ghost" size="icon">
            <MicVocal className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ListMusic className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Laptop2 className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 w-32">
            <Button variant="ghost" size="icon" onClick={() => setVolume(volume > 0 ? 0 : 50)}>
                {volume === 0 ? <VolumeX className="h-5 w-5"/> : <Volume2 className="h-5 w-5"/>}
            </Button>
            <Slider defaultValue={[volume]} max={100} step={1} onValueChange={(value) => setVolume(value[0])} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPlayer;