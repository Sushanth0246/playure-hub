
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RightSidebar from '@/components/RightSidebar';
import Stories from '@/components/Stories';
import CreatePost from '@/components/CreatePost';
import Post from '@/components/Post';
import ScrollToTop from '@/components/ScrollToTop';

const samplePosts = [
  {
    author: 'Alex Rodriguez',
    avatar: '/placeholder.svg',
    time: '2 hours ago',
    content: 'Just completed my first React Native app! 🎉 It\'s a fitness tracker that helps you stay motivated. Looking for beta testers and feedback from the community!',
    image: '/placeholder.svg',
    likes: 24,
    comments: 8,
    shares: 3,
    type: 'achievement' as const
  },
  {
    author: 'Sarah Johnson',
    avatar: '/placeholder.svg',
    time: '4 hours ago',
    content: 'Starting a 30-day design challenge! Who\'s in? Let\'s push our creative boundaries together and create something amazing. Drop a comment if you want to join! 💪',
    likes: 56,
    comments: 23,
    shares: 12,
    type: 'competition' as const
  },
  {
    author: 'Mike Chen',
    avatar: '/placeholder.svg',
    time: '6 hours ago',
    content: 'Looking for a frontend developer to collaborate on an exciting fintech project. We\'re building the next generation of personal finance tools. React + TypeScript experience preferred!',
    likes: 18,
    comments: 15,
    shares: 7,
    type: 'collaboration' as const
  },
  {
    author: 'Emma Davis',
    avatar: '/placeholder.svg',
    time: '8 hours ago',
    content: 'Beautiful sunset from my home office today! Sometimes it\'s the simple moments that inspire the best ideas. What\'s inspiring you today?',
    image: '/placeholder.svg',
    likes: 89,
    comments: 32,
    shares: 18,
    type: 'normal' as const
  },
  {
    author: 'David Park',
    avatar: '/placeholder.svg',
    time: '12 hours ago',
    content: 'Proud to announce that our team won the Global Innovation Hackathon! 🏆 Our AI-powered sustainability platform impressed the judges. Thanks to everyone who supported us!',
    likes: 156,
    comments: 45,
    shares: 28,
    type: 'achievement' as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 ml-64 mr-80 min-h-screen">
          <div className="max-w-2xl mx-auto py-6 px-4 space-y-6">
            {/* Stories Section */}
            <Stories />
            
            {/* Create Post */}
            <CreatePost />
            
            {/* Posts Feed */}
            <div className="space-y-4">
              {samplePosts.map((post, index) => (
                <div key={index} style={{ animationDelay: `${(index + 3) * 100}ms` }}>
                  <Post {...post} />
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <RightSidebar />
      </div>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
