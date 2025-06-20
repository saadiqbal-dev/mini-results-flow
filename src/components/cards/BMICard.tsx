import React from "react";
import type { CardProps } from "../../types";
import { Header } from "../ui/Header";
import { ProgressIndicator } from "../ui/ProgressIndicator";

export const BMICard: React.FC<CardProps> = ({
  formData,
  onNext,
  onBack,
  currentCard,
  totalCards,
}) => {
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
    <div className="min-h-screen bg-[#F8F4F4] p-4">
      <div className="max-w-md mx-auto">
        <Header />
        <ProgressIndicator current={currentCard} total={totalCards} />

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">📊</div>
            <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
              Your BMI Is <span className="text-[#F75950]">{formData.BMI}</span>
            </h1>
            <h2 className="text-[#183B49] font-inter font-semibold text-xl">
              — What That Means
            </h2>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-4">
              <div className="w-20 h-16 bg-[#36BC9F] rounded-lg flex items-center justify-center text-white text-xs">
                BMI
                <br />
                😰
              </div>
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl">
                👤❓
              </div>
            </div>
          </div>

          <div className="space-y-4 text-[#13556F] font-inter text-base leading-relaxed">
            <p>
              BMI (Body Mass Index) is a quick way to estimate how your weight
              might affect your health based on your height and weight.
            </p>
            <p>
              When your BMI is too high, your body may store more fat than it
              uses. That can slow your metabolism, drain your energy, and make
              fat loss harder — even if you're putting in effort.
            </p>
            <div className="bg-[#FFF5F4] p-4 rounded-lg border-l-4 border-[#F75950]">
              <p className="text-[#F75950] font-inter text-base">
                {getConditionalText()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onBack}
            className="flex-1 bg-transparent border-2 border-[#36BC9F] text-[#36BC9F] py-4 rounded-xl font-inter font-semibold text-lg hover:bg-[#36BC9F] hover:text-white transition-colors"
          >
            ← Body Fat %
          </button>
          <button
            onClick={onNext}
            className="flex-1 bg-[#36BC9F] text-white py-4 rounded-xl font-inter font-semibold text-lg hover:bg-[#2A9A82] transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};
