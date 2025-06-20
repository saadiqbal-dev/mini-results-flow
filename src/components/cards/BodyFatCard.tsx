import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { Button } from "../ui/button";
import { Scale, ArrowRight } from "lucide-react";

export const BodyFatCard: React.FC<CardProps> = ({
  formData,
  onNext,
  currentCard,
  totalCards,
}) => {
  const getConditionalText = () => {
    const { gender, bodyFatPercent } = formData;
    const maleThresholds = { almost: 24, obese: 25, veryObese: 32 };
    const femaleThresholds = { almost: 31, obese: 32, veryObese: 40 };

    const thresholds = gender === "male" ? maleThresholds : femaleThresholds;

    if (bodyFatPercent < thresholds.almost) {
      return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else if (bodyFatPercent < thresholds.veryObese) {
      return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
    } else {
      return "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4F4] p-4">
      <div className="max-w-md mx-auto">
        <Header currentCard={currentCard} totalCards={totalCards} />
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Scale className="w-12 h-12 text-[#36BC9F]" />
            </div>
            <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
              Your Body Fat Percentage Is{" "}
              <span className="text-[#F75950]">{formData.bodyFatPercent}%</span>
            </h1>
            <h2 className="text-[#183B49] font-inter font-semibold text-xl">
              Here's Why That Matters
            </h2>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="bg-[#36BC9F] rounded-lg p-3 text-white text-sm">
                Muscle Mass
              </div>
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl">
                👤
              </div>
              <div className="bg-orange-400 rounded-lg p-3 text-white text-sm">
                Body Fat
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
            <p>
              Your body fat percentage tells us how much of your body is lean
              mass (muscle, organs, bone) vs stored fat.
            </p>
            <p>
              Too much stored fat doesn't just affect how you look — it impacts
              your energy, hormone balance, and ability to burn fat efficiently.
            </p>
            <div className="bg-[#FFF5F4] p-4 rounded-lg border-l-4 border-[#F75950]">
              <p className="text-[#F75950] font-inter text-base">
                {getConditionalText()}
              </p>
            </div>
          </div>
        </div>{" "}
        <Button
          onClick={onNext}
          className="w-full bg-[#36BC9F] text-white py-4 rounded-xl font-inter font-semibold text-lg mt-6 hover:bg-[#2A9A82] transition-colors"
          size="lg"
        >
          Next
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};
