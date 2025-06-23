import React from "react";
import type { FormData } from "../../types";

interface CalorieCardProps {
  formData: FormData;
}

export const CalorieCard: React.FC<CalorieCardProps> = ({ formData }) => {
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
    <>
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
          Your body burns calories just to stay alive — that's your BMR. Add in
          movement, and you burn even more. Eat less than you burn? You lose
          weight. Eat more? You store it. Simple math, but the *type* of
          calories still makes or breaks your results.
        </p>
        <p>
          Most people eat low-quality calories that spike cravings, crash
          energy, and cause fat to stick — even if they're technically under
          their daily limit.
        </p>
        <p className="text-[#F75950] font-inter text-base">
          {getConditionalText()}
        </p>
      </div>
    </>
  );
};
