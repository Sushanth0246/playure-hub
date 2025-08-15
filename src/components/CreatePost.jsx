import React from 'react';
import { Image, Video, Smile, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CreatePost = () => {
  return (
    <div className="post-card animate-slide-up" style={{ animationDelay: '200ms' }}>
      <div className="flex space-x-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-primary text-primary-foreground">You</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="What's on your mind? Share your achievements, start a competition, or find collaborators..."
            className="resize-none border-none bg-muted/50 focus:bg-card min-h-[80px]"
          />
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="text-success hover:bg-success/10">
            <Image className="w-4 h-4 mr-2" />
            Photo
          </Button>
          <Button variant="ghost" size="sm" className="text-competition hover:bg-competition/10">
            <Video className="w-4 h-4 mr-2" />
            Video
          </Button>
          <Button variant="ghost" size="sm" className="text-accent hover:bg-accent/10">
            <Smile className="w-4 h-4 mr-2" />
            Feeling
          </Button>
          <Button variant="ghost" size="sm" className="text-secondary hover:bg-secondary/10">
            <MapPin className="w-4 h-4 mr-2" />
            Location
          </Button>
        </div>
        
        <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white px-6">
          Share
        </Button>
      </div>
    </div>
  );
};

export default CreatePost;