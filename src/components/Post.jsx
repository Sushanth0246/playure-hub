import React from 'react';
import { Heart, MessageCircle, Share2, Trophy, Users, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Post = ({
  author,
  avatar,
  time,
  content,
  image,
  likes,
  comments,
  shares,
  type = 'normal'
}) => {
  const getTypeColor = () => {
    switch (type) {
      case 'achievement': return 'border-achievement/30 bg-achievement/5';
      case 'competition': return 'border-competition/30 bg-competition/5';
      case 'collaboration': return 'border-collaboration/30 bg-collaboration/5';
      default: return '';
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'achievement': return <Trophy className="w-4 h-4 text-achievement" />;
      case 'competition': return <Trophy className="w-4 h-4 text-competition" />;
      case 'collaboration': return <Users className="w-4 h-4 text-collaboration" />;
      default: return null;
    }
  };

  return (
    <div className={`post-card animate-slide-up ${getTypeColor()}`}>
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-sm">{author}</h3>
              {getTypeIcon()}
            </div>
            <p className="text-xs text-muted-foreground">{time}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-sm leading-relaxed">{content}</p>
        {image && (
          <div className="mt-3 rounded-lg overflow-hidden">
            <img
              src={image}
              alt="Post content"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500 hover:bg-red-50">
            <Heart className="w-4 h-4 mr-1" />
            {likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500 hover:bg-blue-50">
            <MessageCircle className="w-4 h-4 mr-1" />
            {comments}
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500 hover:bg-green-50">
            <Share2 className="w-4 h-4 mr-1" />
            {shares}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Post;