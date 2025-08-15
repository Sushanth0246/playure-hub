
import React from 'react';
import { TrendingUp, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const suggestedUsers = [
  { name: 'Alex Rodriguez', role: 'UI/UX Designer', mutual: 5 },
  { name: 'Sarah Johnson', role: 'Full Stack Developer', mutual: 12 },
  { name: 'Mike Chen', role: 'Product Manager', mutual: 8 },
];

const trendingTopics = [
  '#WebDevelopment',
  '#DesignChallenge',
  '#StartupLife',
  '#RemoteWork',
  '#TechInnovation'
];

const upcomingEvents = [
  { title: 'Design System Workshop', date: 'Dec 18', attendees: 124 },
  { title: 'Startup Pitch Competition', date: 'Dec 20', attendees: 89 },
  { title: 'Tech Networking Event', date: 'Dec 22', attendees: 156 },
];

const RightSidebar = () => {
  return (
    <aside className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-80 bg-card/50 backdrop-blur-sm border-l border-border overflow-y-auto p-4 space-y-6">
      {/* Suggested Connections */}
      <div className="feature-card">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Suggested for You</h3>
        </div>
        <div className="space-y-3">
          {suggestedUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-xs bg-primary/10">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.role}</p>
                  <p className="text-xs text-muted-foreground">{user.mutual} mutual connections</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="h-7 text-xs">
                Connect
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="feature-card">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-secondary" />
          <h3 className="font-semibold">Trending</h3>
        </div>
        <div className="space-y-2">
          {trendingTopics.map((topic, index) => (
            <div key={index} className="text-sm text-primary hover:text-primary-dark cursor-pointer transition-colors">
              {topic}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="feature-card">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-5 h-5 text-accent" />
          <h3 className="font-semibold">Upcoming Events</h3>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="border-l-2 border-primary/20 pl-3">
              <p className="text-sm font-medium">{event.title}</p>
              <p className="text-xs text-muted-foreground">{event.date} • {event.attendees} attending</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
