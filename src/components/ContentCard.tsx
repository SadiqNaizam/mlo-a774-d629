import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface ContentCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  href: string;
  type?: 'album' | 'artist' | 'playlist';
}

const ContentCard: React.FC<ContentCardProps> = ({
  imageUrl,
  title,
  subtitle,
  href,
  type = 'album',
}) => {
  console.log('ContentCard loaded for:', title);

  const isArtist = type === 'artist';

  return (
    <Link to={href} className="group block w-full">
      <Card className="w-full overflow-hidden border-none bg-neutral-800 p-4 transition-all duration-300 hover:bg-neutral-700">
        <div className="relative mb-4">
          <AspectRatio ratio={1}>
            <img
              src={imageUrl || 'https://via.placeholder.com/150'}
              alt={title}
              className={`object-cover w-full h-full ${isArtist ? 'rounded-full' : 'rounded-md'}`}
            />
          </AspectRatio>
          <div className="absolute bottom-2 right-2 flex items-center justify-center">
            <button
              aria-label={`Play ${title}`}
              className="bg-blue-500 text-white rounded-full p-3 shadow-lg transform transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            >
              <Play className="h-6 w-6 fill-current" />
            </button>
          </div>
        </div>
        <CardContent className="p-0 text-left">
          <h3 className="font-bold text-white truncate">{title}</h3>
          <p className="text-sm text-neutral-400 truncate">{subtitle}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ContentCard;