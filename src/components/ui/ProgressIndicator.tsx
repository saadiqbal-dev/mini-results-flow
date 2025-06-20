import React from "react";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  current,
  total,
}) => (
  <div className="flex justify-center gap-2 mb-6">
    {Array.from({ length: total }, (_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          i < current ? "bg-[#36BC9F]" : "bg-[#D8D8D8]"
        }`}
      />
    ))}
  </div>
);
