import React from "react";
import type { FormData } from "../../types";

interface BMICardProps {
  formData: FormData;
}

export const BMICard: React.FC<BMICardProps> = ({ formData }) => {
  const getConditionalText = () => {
    const { BMI } = formData;

    if (BMI < 26) {
      return "You're right on the edge — just a few small shifts could unlock better energy and faster fat-burning.";
    } else if (BMI < 35) {
      return "At this level, your body may be under more strain than you realize — from hormone balance to inflammation and recovery.";
    } else {
      return "This BMI range often comes with deeper challenges, like insulin resistance and chronic fatigue — but with the right plan, you can absolutely turn things around.";
    }
  };
  return (
    <>
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4 text-[34px]">📊</div>
        <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
          Your BMI Is <span className="text-[#F75950]">{formData.BMI}</span>
        </h1>
        <h2 className="text-[#183B49] font-inter font-semibold text-xl">
          — What That Means
        </h2>
      </div>

      <div className="mb-6 flex justify-center">
        <img
          src="/images/cards/card2.png"
          alt="BMI Illustration"
          className="mx-auto w-80"
        />
      </div>

      <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
        <p>
          BMI (Body Mass Index) is a quick way to estimate how your weight might
          affect your health based on your height and weight.
        </p>
        <p>
          When your BMI is too high, your body may store more fat than it uses.
          That can slow your metabolism, drain your energy, and make fat loss
          harder — even if you're putting in effort.
        </p>
        <p className="text-[#F75950] font-inter text-base">
          {getConditionalText()}
        </p>
      </div>
    </>
  );
};
