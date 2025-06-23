import React from "react";
import type { FormData } from "../../types";

interface ResultsTimelineCardProps {
  formData: FormData;
}

export const ResultsTimelineCard: React.FC<ResultsTimelineCardProps> = ({
  formData,
}) => {
  return (
    <div className="text-center mb-6">
      <div className="flex justify-center mb-4 text-[34px]">⏰</div>
      <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
        You Could See Results in as Little as{" "}
        <span className="text-[#F75950]">{formData.seeResultsDays} Days</span>
      </h1>

      <div className="mb-6 flex justify-center mt-6">
        <img
          src="/images/cards/card6.png"
          alt="Results Timeline Illustration"
          className="mx-auto w-80"
        />
      </div>

      <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
        <p>
          Visible change doesn't take forever — when your metabolism shifts,
          your body can start dropping bloat, water weight, and fat surprisingly
          fast.
        </p>
        <p>
          It's not about how long you try — it's about whether your body's
          actually set up to change. The wrong plan wastes months.
        </p>
        <p className="text-[#F75950] font-inter text-base">
          You're already aware — and that's step one. Now imagine pairing that
          awareness with a plan that shows results in the mirror by day 10.
        </p>
      </div>
    </div>
  );
};
