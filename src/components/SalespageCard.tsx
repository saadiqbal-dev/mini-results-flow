import React, { useState, useEffect, useRef } from "react";
import type { FormData } from "../types";
import { Button } from "./ui/button";
import { Clock, ArrowRight, Shield } from "lucide-react";

interface SalespageCardProps {
  formData: FormData;
}

export const SalespageCard: React.FC<SalespageCardProps> = ({ formData }) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [showStickyButton, setShowStickyButton] = useState(true);
  const planPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyButton(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (planPickerRef.current) {
      observer.observe(planPickerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const scrollToPlanPicker = () => {
    planPickerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8F4F4] relative">
      {/* Sticky CTA Button */}{" "}
      {showStickyButton && (
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <Button
            onClick={scrollToPlanPicker}
            className="w-full bg-[#F75950] text-white py-4 rounded-xl font-inter font-semibold text-lg shadow-lg hover:bg-[#E54940] transition-colors"
            size="lg"
          >
            Claim My Plan
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}
      <div className="max-w-md mx-auto p-4 pb-20">
        {" "}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="/images/ketoslim-logo.png"
              alt="KETOSLIM"
              className="h-8 w-auto"
            />
          </div>
          <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-4">
            🎯 Your Personalized KetoSlim Plan Is Ready
          </h1>
        </div>
        {/* Before/After Comparison */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <div className="w-20 h-24 bg-orange-300 rounded-lg mb-2 flex items-center justify-center text-white">
                👤
              </div>
              <div className="text-sm font-semibold">Now</div>
              <div className="text-xs text-gray-600">
                Body Fat
                <br />
                {formData.bodyFatPercent}%
              </div>
            </div>
            <div className="text-4xl">→</div>
            <div className="text-center">
              <div className="w-20 h-24 bg-green-400 rounded-lg mb-2 flex items-center justify-center text-white">
                👤
              </div>
              <div className="text-sm font-semibold">6 Months</div>
              <div className="text-xs text-gray-600">
                Body Fat
                <br />
                10-12%
              </div>
            </div>
          </div>
        </div>
        {/* Benefits List */}
        <div className="bg-white rounded-3xl p-6 shadow-sm mb-6">
          <h3 className="text-[#183B49] font-inter font-semibold text-xl mb-4">
            Your program will also work on:
          </h3>
          <div className="space-y-3">
            {[
              "Improving Digestion",
              "Toning Muscles",
              "Mental Wellness Reset",
              "Physical Confidence Boost",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#36BC9F] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-[#13556F] font-inter">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Countdown Timer */}{" "}
        <div className="bg-[#F75950] text-white rounded-3xl p-6 text-center mb-6">
          <div className="flex justify-center mb-2">
            <Clock className="w-8 h-8" />
          </div>
          <h3 className="font-inter font-semibold text-xl mb-2">
            Special Launch Offer
          </h3>
          <div className="text-4xl font-bold mb-2">{formatTime(timeLeft)}</div>
          <p className="text-sm">This offer expires soon!</p>
        </div>
        {/* Plan Picker */}
        <div ref={planPickerRef} className="space-y-4">
          <h3 className="text-[#183B49] font-inter font-semibold text-xl text-center mb-4">
            Choose Your Plan
          </h3>

          {/* 3 Month Plan */}
          <div className="bg-white rounded-3xl p-6 border-2 border-[#36BC9F] shadow-sm relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F75950] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Recommended
            </div>
            <div className="text-center">
              <h4 className="text-[#183B49] font-inter font-semibold text-lg mb-2">
                3 Month Custom Keto Plan
              </h4>
              <div className="text-[#F75950] text-3xl font-bold mb-2">$39</div>
              <div className="text-gray-500 line-through mb-2">$67</div>
              <div className="text-sm text-[#13556F] mb-4">
                One-time payment
              </div>{" "}
              <Button
                className="w-full bg-[#36BC9F] text-white py-3 rounded-xl font-inter font-semibold hover:bg-[#2A9A82] transition-colors"
                size="lg"
              >
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* 6 Month Plan */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <div className="text-center">
              <h4 className="text-[#183B49] font-inter font-semibold text-lg mb-2">
                6 Month Complete Program
              </h4>
              <div className="text-[#F75950] text-3xl font-bold mb-2">$59</div>
              <div className="text-gray-500 line-through mb-2">$127</div>
              <div className="text-sm text-[#13556F] mb-4">
                One-time payment
              </div>{" "}
              <Button
                variant="outline"
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-inter font-semibold hover:bg-gray-300 transition-colors"
                size="lg"
              >
                Select Plan
              </Button>
            </div>
          </div>
        </div>
        {/* Money Back Guarantee */}{" "}
        <div className="bg-white rounded-3xl p-6 shadow-sm mt-6 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-[#36BC9F]" />
          </div>
          <h3 className="text-[#183B49] font-inter font-semibold text-lg mb-2">
            Money Back Guarantee
          </h3>
          <p className="text-[#13556F] text-sm">
            We are confident with our service quality and this is why we offer
            60 days money back guarantee if you are not satisfied with your
            goals, it's a risk-free offer.
          </p>
        </div>
      </div>
    </div>
  );
};
