import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const WeightLossCard: React.FC<CardProps> = ({
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
              <div className="flex justify-center mb-4 text-[34px]">📉</div>
              <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
                You Could Be Losing{" "}
                <span className="text-[#F75950]">
                  {formData.weightLossRate} lbs / Week
                </span>
              </h1>
              <h2 className="text-[#183B49] font-inter font-semibold text-xl">
                — With the Right Fuel Source
              </h2>
            </div>

            <div className="mb-6 flex justify-center">
              <img
                src="/images/cards/card5.png"
                alt="Weight Loss Illustration"
                className="mx-auto w-80"
              />
            </div>

            <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
              <p>
                This is your potential, what your body could lose if it's in
                fat-burning mode. But that depends on getting your metabolism
                working with you, not against you.
              </p>
              <p>
                Low energy, stubborn cravings, and slow progress usually mean
                your body is still burning sugar instead of fat — and that keeps
                weight loss stuck.
              </p>
              <p className="text-[#F75950] font-inter text-base">
                With your numbers, results could show up even faster than
                expected, but only if your metabolism is dialed in and you're
                burning fat, not sugar.
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
