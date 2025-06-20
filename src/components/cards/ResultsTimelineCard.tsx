import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { Button } from "../ui/button";
import { Clock, ArrowRight, ChevronLeft } from "lucide-react";

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
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-[#36BC9F]" />
            </div>
            <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
              You Could See Results in as Little as{" "}
              <span className="text-[#F75950]">
                {formData.seeResultsDays} Days
              </span>
            </h1>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-xl">
                👤
              </div>
              <div className="text-2xl">📅{formData.seeResultsDays}</div>
              <div className="flex gap-1">
                <div className="w-12 h-12 bg-orange-200 rounded flex items-center justify-center text-xs">
                  👤
                </div>
                <div className="w-12 h-12 bg-orange-300 rounded flex items-center justify-center text-xs">
                  👤
                </div>
                <div className="w-12 h-12 bg-orange-400 rounded flex items-center justify-center text-xs">
                  👤
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
            <p>
              Visible change doesn't take forever — when your metabolism shifts,
              your body can start dropping bloat, water weight, and fat
              surprisingly fast.
            </p>
            <p>
              It's not about how long you try — it's about whether your body's
              actually set up to change. The wrong plan wastes months.
            </p>
            <div className="bg-[#FFF5F4] p-4 rounded-lg border-l-4 border-[#F75950]">
              <p className="text-[#F75950] font-inter text-base">
                You're already aware — and that's step one. Now imagine pairing
                that awareness with a plan that shows results in the mirror by
                day 10.
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
            Weight Rate
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
