import React from "react";
import type { FormData } from "../../types";

interface WeightLossCardProps {
  formData: FormData;
}

export const WeightLossCard: React.FC<WeightLossCardProps> = ({ formData }) => {
  return (
    <div className="text-center mb-6">
      <div className="flex justify-center mb-4 text-[34px]">📉</div>
      <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2 px-8">
        You Could Be Losing{" "}
        <span className="text-[#F75950]">
          {formData.weightLossRate} lbs / Week
        </span>
      </h1>
      <h2 className="text-[#183B49] font-inter font-semibold text-xl">
        With the Right Fuel Source
      </h2>

      <div className="mb-6 flex justify-center mt-6">
        <img
          src="/images/cards/card5.png"
          alt="Weight Loss Illustration"
          className="mx-auto w-80"
        />
      </div>

      <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
        <p>
          This is your potential, what your body could lose if it's in
          fat-burning mode. But that depends on getting your metabolism working
          with you, not against you.
        </p>
        <p>
          Low energy, stubborn cravings, and slow progress usually mean your
          body is still burning sugar instead of fat — and that keeps weight
          loss stuck.
        </p>
        <p className="text-[#F75950] font-inter text-base">
          With your numbers, results could show up even faster than expected,
          but only if your metabolism is dialed in and you're burning fat, not
          sugar.
        </p>
      </div>
    </div>
  );
};
