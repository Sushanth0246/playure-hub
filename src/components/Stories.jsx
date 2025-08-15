import React from 'react';
import { Plus } from 'lucide-react';

const stories = [
  { id: 1, name: 'Your Story', image: '/placeholder.svg', isOwn: true },
  { id: 2, name: 'Alex Chen', image: '/placeholder.svg' },
  { id: 3, name: 'Sarah Kim', image: '/placeholder.svg' },
  { id: 4, name: 'Marcus J.', image: '/placeholder.svg' },
  { id: 5, name: 'Emma Davis', image: '/placeholder.svg' },
  { id: 6, name: 'David Lee', image: '/placeholder.svg' },
  { id: 7, name: 'Lisa Park', image: '/placeholder.svg' },
];

const Stories = () => {
  return (
    <div className="bg-card rounded-xl p-4 border border-border animate-slide-up">
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="flex-shrink-0 text-center cursor-pointer hover-lift"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`w-16 h-16 rounded-full p-[3px] ${story.isOwn ? 'bg-muted' : 'story-ring'} relative`}>
              <div className="w-full h-full rounded-full overflow-hidden bg-muted flex items-center justify-center">
                {story.isOwn ? (
                  <Plus className="w-6 h-6 text-primary" />
                ) : (
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
            <p className="text-xs mt-2 font-medium truncate w-16">{story.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;