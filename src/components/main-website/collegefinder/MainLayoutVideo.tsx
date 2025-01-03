import React from 'react';
import { Outlet } from 'react-router-dom';
import VideoFinder from './VideoFinder';
import FinderContent from './FinderContent';
import UnivercitiesLogoSlider from '../homePage/UnivercitiesLogoSlider';
import ScrollTop from './ScrollTop';

const MainLayoutVideo: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="font-poppins">
      <ScrollTop />
      <VideoFinder />
      <div className="relative">
        {/* Render the dynamically passed children or fallback to Outlet */}
        {children || <Outlet />}
      </div>
      <FinderContent />
      <div className="px-10">
        <UnivercitiesLogoSlider />
      </div>
    </div>
  );
};

export default MainLayoutVideo;
