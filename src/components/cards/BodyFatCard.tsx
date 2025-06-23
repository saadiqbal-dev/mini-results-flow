import React from "react";
import type { FormData } from "../../types";

interface BodyFatCardProps {
  formData: FormData;
}

export const BodyFatCard: React.FC<BodyFatCardProps> = ({ formData }) => {
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
    <>
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4 text-[34px]">⚖</div>
        <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
          Your Body Fat Percentage Is{" "}
          <span className="text-[#F75950]">{formData.bodyFatPercent}%</span>
        </h1>
        <h2 className="text-[#183B49] font-inter font-semibold text-xl">
          Here's Why That Matters
        </h2>
      </div>

      <div className="mb-6 flex justify-center">
        <img
          src="/images/cards/card1.png"
          alt="Body Fat Illustration"
          className="mx-auto w-80"
        />
      </div>

      <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
        <p>
          Your body fat percentage tells us how much of your body is lean mass
          (muscle, organs, bone) vs stored fat.
          <br /> Too much stored fat doesn't just affect how you look — it
          impacts your energy, hormone balance, and ability to burn fat
          efficiently.
        </p>
        <p className="text-[#F75950] font-inter text-base">
          {getConditionalText()}
        </p>
      </div>
    </>
  );
};
