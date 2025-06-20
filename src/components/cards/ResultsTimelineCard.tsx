import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ResultsTimelineCard: React.FC<CardProps> = ({
  formData,
  onNext,
  onBack,
  currentCard,
  totalCards,
}) => {
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
              <div className="flex justify-center mb-4 text-[34px]">⏰</div>
              <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
                You Could See Results in as Little as{" "}
                <span className="text-[#F75950]">
                  {formData.seeResultsDays} Days
                </span>
              </h1>
            </div>

            <div className="mb-6 flex justify-center">
              <img
                src="/images/cards/card6.png"
                alt="Results Timeline Illustration"
                className="mx-auto w-80"
              />
            </div>

            <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
              <p>
                Visible change doesn't take forever — when your metabolism
                shifts, your body can start dropping bloat, water weight, and
                fat surprisingly fast.
              </p>
              <p>
                It's not about how long you try — it's about whether your body's
                actually set up to change. The wrong plan wastes months.
              </p>
              <p className="text-[#F75950] font-inter text-base">
                You're already aware — and that's step one. Now imagine pairing
                that awareness with a plan that shows results in the mirror by
                day 10.
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
