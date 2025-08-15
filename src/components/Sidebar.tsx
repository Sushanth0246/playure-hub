
import React from 'react';
import { 
  Trophy, 
  Zap, 
  Users, 
  MessageSquare, 
  UserPlus,
  TrendingUp,
  Calendar,
  Home,
  Bookmark,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const sidebarFeatures = [
  { name: 'Feed', icon: Home, color: 'text-primary', bgColor: 'bg-primary/10' },
  { name: 'Achievements', icon: Trophy, color: 'text-achievement', bgColor: 'bg-achievement/10' },
  { name: 'Competitions', icon: Zap, color: 'text-competition', bgColor: 'bg-competition/10' },
  { name: 'Collaborators', icon: Users, color: 'text-collaboration', bgColor: 'bg-collaboration/10' },
  { name: 'Messages', icon: MessageSquare, color: 'text-secondary', bgColor: 'bg-secondary/10' },
  { name: 'Team Up', icon: UserPlus, color: 'text-accent', bgColor: 'bg-accent/10' },
  { name: 'Analytics', icon: TrendingUp, color: 'text-primary', bgColor: 'bg-primary/10' },
  { name: 'Events', icon: Calendar, color: 'text-secondary', bgColor: 'bg-secondary/10' },
  { name: 'Saved', icon: Bookmark, color: 'text-muted-foreground', bgColor: 'bg-muted' },
  { name: 'Settings', icon: Settings, color: 'text-muted-foreground', bgColor: 'bg-muted' },
];

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-card/50 backdrop-blur-sm border-r border-border overflow-y-auto">
      <div className="p-4 space-y-2">
        {sidebarFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Button
              key={feature.name}
              variant="ghost"
              className={`w-full justify-start h-12 hover:${feature.bgColor} hover:${feature.color} transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-8 h-8 rounded-lg ${feature.bgColor} ${feature.color} flex items-center justify-center mr-3`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-medium">{feature.name}</span>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
