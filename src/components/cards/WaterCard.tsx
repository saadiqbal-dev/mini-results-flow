import React from "react";
import type { FormData } from "../../types";

interface WaterCardProps {
  formData: FormData;
}

export const WaterCard: React.FC<WaterCardProps> = ({ formData }) => {
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
    <div className="text-center mb-6">
      <div className="flex justify-center mb-4 text-[34px]">💧</div>
      <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
        Your Body Needs <span className="text-[#F75950]">8-9</span> Cups of
        Water Daily
      </h1>
      <h2 className="text-[#183B49] font-inter font-semibold text-xl">
        Here's Why That Matters
      </h2>

      <div className="mb-6 flex justify-center mt-6">
        <img
          src="/images/cards/card4.png"
          alt="Hydration Illustration"
          className="mx-auto w-80"
        />
      </div>

      <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
        <p>
          Hydration is a fat-burning multiplier. Without enough water, your body
          holds onto toxins, slows digestion, and burns fat less efficiently.
        </p>
        <p>
          Even mild dehydration can feel like fatigue, hunger, or sugar
          cravings. You're not lazy — you're likely under-hydrated.
        </p>
        <p className="text-[#F75950] font-inter text-base">
          {getConditionalText()}
        </p>
      </div>
    </div>
  );
};
