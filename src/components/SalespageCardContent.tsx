import React, { useState, useEffect } from "react";
import type { FormData } from "../types";
import { Button } from "./ui/button";
import { Clock, ArrowRight, Check } from "lucide-react";
import { Progress } from "./ui/progress";

interface SalespageCardProps {
  formData: FormData;
}

export const SalespageCard: React.FC<SalespageCardProps> = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [selectedPlan, setSelectedPlan] = useState<"installments" | "discount">(
    "discount"
  );

  // Animated progress values
  const [energyLevelsNow, setEnergyLevelsNow] = useState(0);
  const [physicalHealthNow, setPhysicalHealthNow] = useState(0);
  const [metabolismSpeedNow, setMetabolismSpeedNow] = useState(0);
  const [energyLevelsFuture, setEnergyLevelsFuture] = useState(0);
  const [physicalHealthFuture, setPhysicalHealthFuture] = useState(0);
  const [metabolismSpeedFuture, setMetabolismSpeedFuture] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Animate progress values gradually
    const targetValues = {
      energyLevelsNow: 43,
      physicalHealthNow: 20,
      metabolismSpeedNow: 35,
      energyLevelsFuture: 90,
      physicalHealthFuture: 85,
      metabolismSpeedFuture: 95,
    };

    const animateProgress = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      target: number,
      delay: number
    ) => {
      setTimeout(() => {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setter(target);
            clearInterval(timer);
          } else {
            setter(Math.round(current));
          }
        }, 20);
      }, delay);
    };

    animateProgress(setEnergyLevelsNow, targetValues.energyLevelsNow, 800);
    animateProgress(setPhysicalHealthNow, targetValues.physicalHealthNow, 1000);
    animateProgress(
      setMetabolismSpeedNow,
      targetValues.metabolismSpeedNow,
      1200
    );
    animateProgress(
      setEnergyLevelsFuture,
      targetValues.energyLevelsFuture,
      1800
    );
    animateProgress(
      setPhysicalHealthFuture,
      targetValues.physicalHealthFuture,
      2000
    );
    animateProgress(
      setMetabolismSpeedFuture,
      targetValues.metabolismSpeedFuture,
      2200
    );
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      {/* Logo */}
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <img
            src="/images/ketoslim-logo.png"
            alt="KETOSLIM"
            className="h-4 w-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center mb-6">
        <h1 className="text-[#183B49] font-inter font-bold text-[26px] leading-[1.2] mb-4 px-2">
          Your Personalized Keto Plan Is Ready
        </h1>
        <div className="flex items-center justify-center gap-2 bg-[#F75950]/10 rounded-lg p-3 mb-4">
          <Clock size={18} className="text-[#F75950]" />
          <span className="text-[#F75950] font-semibold">
            Limited Time: {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Progress Comparison */}
      <div className="mb-6">
        <h3 className="text-[#183B49] font-inter font-semibold text-lg mb-4 text-center">
          Where You Are Now vs. Where You Could Be
        </h3>

        <div className="space-y-6">
          {/* Current State */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-[#13556F] font-semibold mb-3 text-center">
              Current State
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Energy Levels</span>
                  <span>{energyLevelsNow}%</span>
                </div>
                <Progress value={energyLevelsNow} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Physical Health</span>
                  <span>{physicalHealthNow}%</span>
                </div>
                <Progress value={physicalHealthNow} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Metabolism Speed</span>
                  <span>{metabolismSpeedNow}%</span>
                </div>
                <Progress value={metabolismSpeedNow} className="h-2" />
              </div>
            </div>
          </div>

          {/* Future State */}
          <div className="bg-[#36BC9F]/10 rounded-lg p-4">
            <h4 className="text-[#36BC9F] font-semibold mb-3 text-center">
              With Your Keto Plan
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Energy Levels</span>
                  <span>{energyLevelsFuture}%</span>
                </div>
                <Progress value={energyLevelsFuture} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Physical Health</span>
                  <span>{physicalHealthFuture}%</span>
                </div>
                <Progress value={physicalHealthFuture} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Metabolism Speed</span>
                  <span>{metabolismSpeedFuture}%</span>
                </div>
                <Progress value={metabolismSpeedFuture} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="mb-6">
        <h3 className="text-[#183B49] font-inter font-semibold text-lg mb-4 text-center">
          What You'll Get
        </h3>
        <div className="space-y-3">
          {[
            "Personalized meal plans based on your metrics",
            "Step-by-step fat loss protocol",
            "Progress tracking tools & guidance",
            "24/7 support community access",
            "Bonus: Quick start guide & recipes",
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check
                size={18}
                className="text-[#36BC9F] mt-0.5 flex-shrink-0"
              />
              <span className="text-[#13556F] text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Selection */}
      <div className="mb-6">
        <h3 className="text-[#183B49] font-inter font-semibold text-lg mb-4 text-center">
          Choose Your Plan
        </h3>

        <div className="space-y-3">
          {/* Discount Plan */}
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedPlan === "discount"
                ? "border-[#36BC9F] bg-[#36BC9F]/5"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedPlan("discount")}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedPlan === "discount"
                      ? "border-[#36BC9F] bg-[#36BC9F]"
                      : "border-gray-300"
                  }`}
                >
                  {selectedPlan === "discount" && (
                    <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                  )}
                </div>
                <span className="font-semibold text-[#183B49]">
                  One-Time Payment
                </span>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-[#F75950]">$47</div>
                <div className="text-sm text-gray-500 line-through">$97</div>
              </div>
            </div>
            <p className="text-sm text-[#13556F]">
              Save 52% with our launch special - complete access forever
            </p>
          </div>

          {/* Installment Plan */}
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedPlan === "installments"
                ? "border-[#36BC9F] bg-[#36BC9F]/5"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedPlan("installments")}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedPlan === "installments"
                      ? "border-[#36BC9F] bg-[#36BC9F]"
                      : "border-gray-300"
                  }`}
                >
                  {selectedPlan === "installments" && (
                    <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                  )}
                </div>
                <span className="font-semibold text-[#183B49]">
                  3 Easy Payments
                </span>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-[#F75950]">$19</div>
                <div className="text-sm text-gray-500">$57 total</div>
              </div>
            </div>
            <p className="text-sm text-[#13556F]">
              3 payments of $19 - easier on your budget
            </p>
          </div>
        </div>
      </div>

      {/* Guarantee */}
      <div className="mb-6 text-center">
        <div className="bg-[#F75950]/10 rounded-lg p-4 border border-[#F75950]/20">
          <div className="flex justify-center mb-2">
            <img
              src="/images/assets/60-day-guarantee.webp"
              alt="60 Day Guarantee"
              className="w-16 h-16"
            />
          </div>
          <p className="text-sm text-[#13556F]">
            <strong>60-Day Money-Back Guarantee</strong>
            <br />
            Try your plan risk-free. If you're not completely satisfied, get
            your money back - no questions asked.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mb-4">
        <Button
          className="w-full bg-[#36BC9F] hover:bg-[#2A9A82] text-white py-4 text-lg font-semibold"
          onClick={() => {
            // Handle checkout logic here
            console.log("Selected plan:", selectedPlan);
            window.open("https://example.com/checkout", "_blank");
          }}
        >
          Get My Personalized Plan Now
          <ArrowRight size={20} strokeWidth={3} className="ml-2" />
        </Button>
      </div>

      <p className="text-center text-xs text-gray-500">
        Secure checkout • Instant access • Cancel anytime
      </p>
    </>
  );
};
