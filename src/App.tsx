import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { AboutSection } from './components/AboutSection';
import { ChapterLeaders } from './components/ChapterLeaders';
import { WhyJoin } from './components/WhyJoin';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

export const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-black">
      {/* Navigation Header */}
      <Navbar onOpenJoinModal={handleOpenModal} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with clear background visibility on all screens */}
        <Hero onOpenJoinModal={handleOpenModal} />

        {/* Global Project NANDA Stats */}
        <Stats />

        {/* About Section matching SF Bay Area reference */}
        <AboutSection />

        {/* Chapter Leaders (Santanu Bhattacharya & Sneha Biradar) */}
        <ChapterLeaders />

        {/* 4 Value Pillars */}
        <WhyJoin onOpenJoinModal={handleOpenModal} />

        {/* FAQs fetched from projectnanda.org */}
        <FaqSection />
      </main>

      {/* Clean Footer with Other Projects */}
      <Footer />

      {/* Interactive Join Modal */}
      <JoinModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
