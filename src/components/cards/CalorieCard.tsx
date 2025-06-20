import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { Button } from "../ui/button";
import { Target, ArrowRight, ChevronLeft } from "lucide-react";

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
        <Header currentCard={currentCard} totalCards={totalCards} />{" "}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Target className="w-12 h-12 text-[#36BC9F]" />
            </div>
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
            <div className="flex items-center gap-4">
              <div className="text-6xl">🍟😞</div>
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl">
                🤔
              </div>
              <div className="text-6xl">🥑😊</div>
            </div>
          </div>

          <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
            <p>
              Your body burns calories just to stay alive — that's your BMR. Add
              in movement, and you burn even more. Eat less than you burn? You
              lose weight. Eat more? You store it. Simple math, but the *type*
              of calories still makes or breaks your results.
            </p>
            <p>
              Most people eat low-quality calories that spike cravings, crash
              energy, and cause fat to stick — even if they're technically under
              their daily limit.
            </p>
            <div className="bg-[#FFF5F4] p-4 rounded-lg border-l-4 border-[#F75950]">
              <p className="text-[#F75950] font-inter text-base">
                {getConditionalText()}
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-3 mt-6">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1 border-2 border-[#36BC9F] text-[#36BC9F] py-4 rounded-xl font-inter font-semibold text-lg hover:bg-[#36BC9F] hover:text-white transition-colors"
            size="lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            BMI
          </Button>
          <Button
            onClick={onNext}
            className="flex-1 bg-[#36BC9F] text-white py-4 rounded-xl font-inter font-semibold text-lg hover:bg-[#2A9A82] transition-colors"
            size="lg"
          >
            Next
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
