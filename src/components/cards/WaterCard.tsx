import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { ProgressIndicator } from "../ui/ProgressIndicator";

export const WaterCard: React.FC<CardProps> = ({
  formData,
  onNext,
  onBack,
  currentCard,
  totalCards,
}) => {
  const getConditionalText = () => {
    const { waterIntake } = formData;

    if (waterIntake > 6) {
      return "Drinking over 6 glasses a day? Nice work — your hydration game is strong. Keep it up to support optimal fat loss, steady energy, and fewer cravings.";
    } else if (waterIntake >= 2 && waterIntake <= 6) {
      return "Drinking 2-6 glasses means you're getting closer! Just a few more sips each day could make a real difference in your metabolism and how you feel overall.";
    } else if (waterIntake === 2) {
      return "Drinking about 2 glasses per day is a great start, but your body is likely still running dry. Upping your intake can improve digestion, curb cravings, and help you burn fat more efficiently.";
    } else {
      return "Only Drinking Coffee or Tea? Caffeine doesn't hydrate — in fact, it can dehydrate you. Adding just a few glasses of water each day could dramatically boost your energy and fat-burning.";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4F4] p-4">
      <div className="max-w-md mx-auto">
        <Header />
        <ProgressIndicator current={currentCard} total={totalCards} />

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">💧</div>
            <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
              Your Body Needs <span className="text-[#F75950]">8-9</span> Cups
              of Water Daily
            </h1>
            <h2 className="text-[#183B49] font-inter font-semibold text-xl">
              Here's Why That Matters
            </h2>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="text-6xl">☕😞</div>
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl">
                😌
              </div>
              <div className="text-6xl">💧👍</div>
            </div>
          </div>

          <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
            <p>
              Hydration is a fat-burning multiplier. Without enough water, your
              body holds onto toxins, slows digestion, and burns fat less
              efficiently.
            </p>
            <p>
              Even mild dehydration can feel like fatigue, hunger, or sugar
              cravings. You're not lazy — you're likely under-hydrated.
            </p>
            <div className="bg-[#FFF5F4] p-4 rounded-lg border-l-4 border-[#F75950]">
              <p className="text-[#F75950] font-inter text-base">
                {getConditionalText()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onBack}
            className="flex-1 bg-transparent border-2 border-[#36BC9F] text-[#36BC9F] py-4 rounded-xl font-inter font-semibold text-lg hover:bg-[#36BC9F] hover:text-white transition-colors"
          >
            ← Caloric Intake
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
