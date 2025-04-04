"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, ChevronRight } from "lucide-react";
import ModelViewer from "@/components/ModelViewer";
import QuoteForm from "@/components/QuoteForm";

import LeftSideButtons from "@/components/LeftMenu";
import SlideOutMenu from "@/components/SlideOutMenu";

export default function ConfiguratorLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [slideOutMenuOpen, setSlideOutMenuOpen] = useState(false);
  const [isLeftMenuVisible, setIsLeftMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLeftMenu = () => {
    setIsLeftMenuVisible(!isLeftMenuVisible);
  };

  const handleCategoryClick = (category) => {
    // If menu is already open, just change the category
    if (slideOutMenuOpen) {
      setActiveCategory(category);
    } else {
      // If menu is closed, open it with the selected category
      setActiveCategory(category);
      setSlideOutMenuOpen(true);
    }
  };

  const closeSlideOutMenu = () => {
    setSlideOutMenuOpen(false);
    setTimeout(() => {
      setActiveCategory(null);
    }, 300); // Wait for animation to complete
  };

  return (
    <div className="flex flex-col h-full">
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden bg-gray-200 relative">
        {/* 3D Model Viewer - Now takes full width */}
        <div className="w-full h-full overflow-auto">
          <ModelViewer />
        </div>

        {/* Left Side Buttons - Now with transparent background */}
        <div
          className={`fixed left-0 top-0 w-1/5 h-full bg-transparent transition-transform duration-300 ease-in-out z-20 ${
            isLeftMenuVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <LeftSideButtons
            onCategoryClick={handleCategoryClick}
            activeCategory={activeCategory}
          />

          {/* Slide Out Menu */}
          <SlideOutMenu
            isOpen={slideOutMenuOpen}
            onClose={closeSlideOutMenu}
            category={activeCategory}
          />
        </div>

        {/* Overlay for mobile when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Right - Form */}
        <div className="w-full md:w-1/5 border-l overflow-auto bg-white absolute top-0 right-0 bottom-0">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
