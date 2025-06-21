import React from "react";

interface HeaderProps {
  currentCard?: number;
  totalCards?: number;
}

export const Header: React.FC<HeaderProps> = ({ currentCard, totalCards }) => (
  <div className="flex flex-col items-center mb-5">
    <div className="flex justify-center mb-5">
      <img
        src="/images/ketoslim-logo.png"
        alt="KETOSLIM"
        className="h-4 w-auto"
      />
    </div>
    {currentCard && totalCards && (
      <div className="flex items-center justify-between w-full gap-4 px-4">
        <div className="text-[#36BC9F] font-inter font-semibold text-base">
          Your Results
        </div>
        <div className="flex gap-2">
          {Array.from({ length: totalCards }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i < currentCard ? "bg-[#36BC9F]" : "bg-[#D8D8D8]"
              }`}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);
