import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const CalorieCard: React.FC<CardProps> = ({
  formData,
  onNext,
  onBack,
  currentCard,
  totalCards,
}) => {
  const getConditionalText = () => {
    const { calorieTarget } = formData;

    if (calorieTarget >= 1300 && calorieTarget <= 1500) {
      return "You're already close — just upgrading your food quality could unlock smoother fat loss and better focus.";
    } else if (calorieTarget >= 1100 && calorieTarget < 1300) {
      return "At this range, your body is primed to burn fat — but only if you're eating nutrient-dense, low-carb foods that stabilize your system.";
    } else {
      return "Extreme restriction can backfire — slowing your metabolism, increasing stress, and making results harder to sustain. Keto helps you eat smarter, not just less.";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4F4] p-4">
      <div className="max-w-md mx-auto">
        <Header currentCard={currentCard} totalCards={totalCards} />

        {/* Stacked cards effect */}
        <div className="relative">
          {/* Bottom card (furthest back) */}
          <div className="absolute top-3 left-0 right-0 h-full bg-white rounded-3xl shadow-lg transform"></div>

          {/* Middle card */}
          <div className="absolute top-1.5 left-0 right-0 h-full bg-white rounded-3xl shadow-lg transform"></div>

          {/* Front card (main content) */}
          <div className="relative bg-white rounded-3xl p-6 shadow-lg transform transition-transform ">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4 text-[34px]">🎯</div>
              <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
                You Should Be Eating Around{" "}
                <span className="text-[#F75950]">{formData.calorieTarget}</span>{" "}
                Calories
              </h1>
              <h2 className="text-[#183B49] font-inter font-semibold text-xl">
                — But Not All Calories Are Equal
              </h2>
            </div>

            <div className="mb-6 flex justify-center">
              <img
                src="/images/cards/card3.png"
                alt="Calorie Quality Illustration"
                className="mx-auto w-80"
              />
            </div>

            <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
              <p>
                Your body burns calories just to stay alive — that's your BMR.
                Add in movement, and you burn even more. Eat less than you burn?
                You lose weight. Eat more? You store it. Simple math, but the
                *type* of calories still makes or breaks your results.
              </p>
              <p>
                Most people eat low-quality calories that spike cravings, crash
                energy, and cause fat to stick — even if they're technically
                under their daily limit.
              </p>
              <p className="text-[#F75950] font-inter text-base">
                {getConditionalText()}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-16">
          <Button onClick={onBack} variant="outline">
            Back
            <ArrowLeft strokeWidth={3} className="size-6 absolute left-2" />
          </Button>
          <Button onClick={onNext}>
            Next
            <ArrowRight strokeWidth={3} className="size-6 absolute right-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
