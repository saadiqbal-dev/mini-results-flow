import React from "react";
import type { FormData } from "../types";

interface PlanCardProps {
  formData: FormData;
}

export const PlanCard: React.FC<PlanCardProps> = ({ formData }) => {
  return (
    <>
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4 text-[34px]">🎯</div>
        <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
          Your <span className="text-[#F75950]">Personalized</span> Keto Plan
        </h1>
        <h2 className="text-[#183B49] font-inter font-semibold text-xl">
          Designed Specifically for Your Goals
        </h2>
      </div>

      <div className="mb-6 flex justify-center">
        <img
          src="/images/cards/card7.png"
          alt="Personalized Plan Illustration"
          className="mx-auto w-80"
        />
      </div>

      <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
        <div className="bg-[#F75950]/10 rounded-lg p-4 border-l-4 border-[#F75950]">
          <h3 className="font-semibold text-[#183B49] mb-2">
            Your Plan Summary:
          </h3>
          <ul className="space-y-1 text-sm">
            <li>
              • Target Body Fat:{" "}
              <span className="font-medium">{formData.bodyFatPercent}%</span>
            </li>
            <li>
              • BMI Goal: <span className="font-medium">{formData.BMI}</span>
            </li>
            <li>
              • Daily Calories:{" "}
              <span className="font-medium">{formData.calorieTarget}</span>
            </li>
            <li>
              • Daily Water:{" "}
              <span className="font-medium">{formData.waterIntake} cups</span>
            </li>
            <li>
              • Weekly Loss:{" "}
              <span className="font-medium">{formData.weightLossRate} lbs</span>
            </li>
            <li>
              • Timeline:{" "}
              <span className="font-medium">
                {formData.seeResultsDays} days
              </span>
            </li>
          </ul>
        </div>

        <p>
          Based on your personalized assessment, we've created a step-by-step
          keto plan that works with your body's natural fat-burning mechanisms.
        </p>

        <p>
          This isn't a one-size-fits-all approach — it's designed specifically
          for your metabolism, goals, and lifestyle to deliver the fastest, most
          sustainable results.
        </p>

        <p className="text-[#F75950] font-medium">
          Ready to transform your body with a plan that actually works? Your
          personalized keto blueprint is waiting for you.
        </p>

        <div className="mt-6 bg-[#36BC9F]/10 rounded-lg p-4 text-center">
          <h3 className="font-semibold text-[#183B49] mb-2">
            🎉 Special Launch Offer
          </h3>
          <p className="text-sm text-[#13556F]">
            Get your complete personalized plan + bonus meal recipes + progress
            tracking tools
          </p>
          <div className="mt-3">
            <span className="text-2xl font-bold text-[#F75950]">$47</span>
            <span className="text-sm text-gray-500 line-through ml-2">$97</span>
          </div>
        </div>
      </div>
    </>
  );
};
