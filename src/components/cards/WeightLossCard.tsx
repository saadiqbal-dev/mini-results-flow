import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { ProgressIndicator } from "../ui/ProgressIndicator";

export const WeightLossCard: React.FC<CardProps> = ({
  formData,
  onNext,
  onBack,
  currentCard,
  totalCards,
}) => {
  return (
    <div className="min-h-screen bg-[#F8F4F4] p-4">
      <div className="max-w-md mx-auto">
        <Header />
        <ProgressIndicator current={currentCard} total={totalCards} />

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">📉</div>
            <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
              You Could Be Losing{" "}
              <span className="text-[#F75950]">
                {formData.weightLossRate} lbs / Week
              </span>
            </h1>
            <h2 className="text-[#183B49] font-inter font-semibold text-xl">
              — With the Right Fuel Source
            </h2>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="bg-gray-300 rounded-lg p-3 text-black text-sm">
                Sugar
              </div>
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl">
                🤔
              </div>
              <div className="bg-green-500 rounded-lg p-3 text-white text-sm">
                Fat 🔥
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
            <p>
              This is your potential, what your body could lose if it's in
              fat-burning mode. But that depends on getting your metabolism
              working with you, not against you.
            </p>
            <p>
              Low energy, stubborn cravings, and slow progress usually mean your
              body is still burning sugar instead of fat — and that keeps weight
              loss stuck.
            </p>
            <div className="bg-[#FFF5F4] p-4 rounded-lg border-l-4 border-[#F75950]">
              <p className="text-[#F75950] font-inter text-base">
                With your numbers, results could show up even faster than
                expected, but only if your metabolism is dialed in and you're
                burning fat, not sugar.
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onBack}
            className="flex-1 bg-transparent border-2 border-[#36BC9F] text-[#36BC9F] py-4 rounded-xl font-inter font-semibold text-lg hover:bg-[#36BC9F] hover:text-white transition-colors"
          >
            ← Hydration
          </button>
          <button
            onClick={onNext}
            className="flex-1 bg-[#36BC9F] text-white py-4 rounded-xl font-inter font-semibold text-lg hover:bg-[#2A9A82] transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};
