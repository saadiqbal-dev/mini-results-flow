import React, { useState, useEffect, useRef } from "react";
import type { FormData } from "../types";
import { Button } from "./ui/button";
import { Clock, ArrowRight, Check } from "lucide-react";
import { Progress } from "./ui/progress";

interface SalespageCardProps {
  formData: FormData;
}

export const SalespageCard: React.FC<SalespageCardProps> = ({ formData }) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [showStickyButton, setShowStickyButton] = useState(true);
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

  const planPickerRef = useRef<HTMLDivElement>(null);
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
      metabolismSpeedNow: 37,
      energyLevelsFuture: 76,
      physicalHealthFuture: 100,
      metabolismSpeedFuture: 100,
    };

    const animateValue = (
      setter: (value: number) => void,
      target: number,
      delay: number,
      duration: number
    ) => {
      setTimeout(() => {
        let startTime: number;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.round(target * easeOutCubic);

          setter(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }, delay);
    };

    // Start animations with different delays
    animateValue(setEnergyLevelsNow, targetValues.energyLevelsNow, 500, 1500);
    animateValue(
      setPhysicalHealthNow,
      targetValues.physicalHealthNow,
      800,
      1000
    );
    animateValue(
      setMetabolismSpeedNow,
      targetValues.metabolismSpeedNow,
      1100,
      1250
    );
    animateValue(
      setEnergyLevelsFuture,
      targetValues.energyLevelsFuture,
      750,
      2500
    );
    animateValue(
      setPhysicalHealthFuture,
      targetValues.physicalHealthFuture,
      950,
      3000
    );
    animateValue(
      setMetabolismSpeedFuture,
      targetValues.metabolismSpeedFuture,
      1200,
      3500
    );
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
    <div className="bg-[#F8F4F4] relative">
      {/* Sticky CTA Button */}{" "}
      {showStickyButton && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <Button
            onClick={scrollToPlanPicker}
            className="w-[calc(min(100vw-56px,400px))] shadow-md"
            style={{ maxWidth: "400px" }}
          >
            Claim My Plan
            <ArrowRight
              size={16}
              strokeWidth={3}
              className="absolute right-4"
            />
          </Button>
        </div>
      )}
      <div className="max-w-md mx-auto p-4 pb-20">
        {" "}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-5">
            <img
              src="/images/ketoslim-logo.png"
              alt="KETOSLIM"
              className="h-4 w-auto"
            />
          </div>
        </div>
        <div className="relative bg-white rounded-3xl p-6 shadow-lg transform transition-transform ">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4 text-[34px]">🎯</div>
            <h1 className="text-[#1b3b48] font-semibold text-[34px] leading-[1.2] mb-2">
              Your Personalized KetoSlim Plan Is Ready
            </h1>
          </div>
          <div className="mb-6 flex justify-center relative">
            <img
              src="/images/cards/card7.png"
              alt="Salespage Illustration"
              className="mx-auto w-80"
            />
            <div className="absolute top-full flex flex-row items-center justify-between w-full bg-white py-4 pl-17 pr-10 rounded-xl shadow-lg">
              <p className="text-lg font-semibold text-[#1b3b48]">Now</p>
              <p className="text-lg font-semibold text-[#1b3b48]">6 Months</p>
            </div>
          </div>
          <div className="grid grid-cols-2 relative gap-12 mt-20">
            <div className="absolute h-full w-[1px] left-1/2 -bottom-7 -translate-x-1/2 bg-[#d8d8d8]" />
            <div className="flex flex-col">
              <p className="font-semibold text-[#1b3b48]">Body Fat</p>
              <span className="text-[#F75950]">
                {formData.bodyFatPercent}%
              </span>{" "}
              <div className="flex flex-col gap-3 mt-5">
                <p className="font-semibold text-[#1b3b48]">Energy Levels</p>
                <Progress
                  value={energyLevelsNow}
                  className="h-1.5 bg-[#d8d8d8]"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <p className="font-semibold text-[#1b3b48]">Physical Health</p>
                <Progress
                  value={physicalHealthNow}
                  className="h-1.5 bg-[#d8d8d8]"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <p className="font-semibold text-[#1b3b48]">Metabolism Speed</p>
                <Progress
                  value={metabolismSpeedNow}
                  className="h-1.5 bg-[#d8d8d8]"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-[#1b3b48] p-0 m-0">Body Fat</p>
              <span className="text-[#F75950]">10-12%</span>{" "}
              <div className="flex flex-col gap-3 mt-5">
                <p className="font-semibold text-[#1b3b48]">Energy Levels</p>
                <Progress
                  value={energyLevelsFuture}
                  className="h-1.5 bg-[#d8d8d8]"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <p className="font-semibold text-[#1b3b48]">Physical Health</p>
                <Progress
                  value={physicalHealthFuture}
                  className="h-1.5 bg-[#d8d8d8]"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="flex flex-col gap-3 mt-5">
                <p className="font-semibold text-[#1b3b48]">Metabolism Speed</p>
                <Progress
                  value={metabolismSpeedFuture}
                  className="h-1.5 bg-[#d8d8d8]"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <h3 className="text-[#1b3b48] font-semibold text-xl mb-4 mt-14">
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
                <div className="w-6 h-6 border-2 border-[#f35654] rounded-full flex items-center justify-center">
                  <span className="text-[#f35654] ">
                    <Check size={16} strokeWidth={3} />
                  </span>
                </div>
                <span className="text-[#1b556e]">{benefit}</span>
              </div>
            ))}
          </div>
          <h3 className="text-[#1b3b48] font-semibold text-xl mb-4 mt-14">
            Get all the right tools & knowledge.
          </h3>
          <div className="grid grid-cols-2">
            <div>
              {[
                {
                  title: "Daily Custom Meal Plan",
                  image: "/images/assets/keto-food.webp",
                },
                {
                  title: "Done-For-You Grocery List",
                  image: "/images/assets/cart.webp",
                },
                {
                  title: "Overwhelm-Free Delicious Recipes",
                  image: "/images/assets/heart-pot.webp",
                },
                {
                  title: "Weekly Tips & Guidance",
                  image: "/images/assets/education-icon.webp",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-12 rounded-full"
                    />
                    <h4 className="text-[#f35654] leading-tight text-sm">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <img
                src="/images/assets/iphone-mockup-r.webp"
                alt="KetoSlim App Mockup"
                className="h-full object-cover scale-125 translate-x-4"
              />
            </div>
          </div>
          <h2 className="text-[#1b3b48] font-bold text-3xl leading-tight mb-4 mt-14">
            Trusted by health & nutrition professionals
          </h2>
          <div className="flex flex-col gap-2">
            <img
              src="/images/assets/pubmed-logo-b.svg"
              className="h-7 w-auto mt-6 mb-2"
            />
            <p className="text-[#1b556e] ">
              There is evidence to suggest that a Ketogenic Diet can help with
              weight loss, visceral adiposity, and appetite control.
            </p>
            <a className="text-[#f35654] tracking-tight text-xs underline underline-offset-4">
              source
            </a>

            <img
              src="/images/assets/mayo-clinic-b.webp"
              className="h-10 w-auto mt-6 mb-2 object-contain"
            />
            <p className="text-[#1b556e] ">
              Research shows that a keto diet can result in weight loss and
              improvements in cardiovascular risk factors.
            </p>
            <a className="text-[#f35654] tracking-tight text-xs underline underline-offset-4">
              source
            </a>
          </div>{" "}
          <div ref={planPickerRef} className="flex flex-col gap-4 mt-8">
            <p className="text-center text-[#1b3b48]">
              3 Month Custom Keto Plan
            </p>
            <div className="rounded-lg bg-[#f35654] px-4 py-1.5 shadow text-white flex items-center justify-between">
              <p>Discount expires in:</p>
              <p className="flex items-center gap-2 font-bold">
                {formatTime(timeLeft)} <Clock />
              </p>
            </div>{" "}
            <div
              className={`rounded-lg border-3 px-4 py-1.5 text-[#1b3b48] relative cursor-pointer transition-all ${
                selectedPlan === "installments"
                  ? "border-[#84dbc2]"
                  : "border-[#bebebe] hover:border-[#a0a0a0]"
              }`}
              onClick={() => setSelectedPlan("installments")}
            >
              <p className="uppercase font-semibold">3 Payments of $29</p>
              <p className="max-w-56">
                Just $29 today. Split the rest over 2 easy payments.
              </p>
              <div
                className={`border-3 rounded-full flex items-center justify-center size-6 absolute bottom-3 right-2 ${
                  selectedPlan === "installments"
                    ? "bg-[#43bd9f] border-[#43bd9f]"
                    : "bg-[#f5f5f5] border-[#bebebe]"
                }`}
              >
                {selectedPlan === "installments" && (
                  <Check className="text-white" size={16} strokeWidth={4} />
                )}
              </div>
            </div>
            <div
              className={`rounded-lg border-3 px-4 py-1.5 text-[#1b3b48] relative cursor-pointer transition-all pb-9 ${
                selectedPlan === "discount"
                  ? "border-[#84dbc2]"
                  : "border-[#bebebe] hover:border-[#a0a0a0]"
              }`}
              onClick={() => setSelectedPlan("discount")}
            >
              <div className="absolute w-fit right-0 top-0 text-black font-bold bg-[#84dbc2] h-fit px-3 py-1 rounded-bl-md">
                23% OFF
              </div>
              <p className="uppercase font-semibold bg-[#f35654] px-3 mt-2 text-sm py-0.5 text-white rounded-md w-fit">
                DISCOUNT
              </p>
              <p className="max-w-56">
                1 Payment of $67. Pay in full today and save $20 instantly.
              </p>
              <p className="text-center text-xs pt-1 font-bold absolute bottom-0 left-1/2 -translate-x-1/2 w-full rounded-b bg-[#84dbc2]">
                MOST POPULAR
              </p>
              <div
                className={`border-3 rounded-full flex items-center justify-center size-6 absolute bottom-8 right-2 ${
                  selectedPlan === "discount"
                    ? "bg-[#43bd9f] border-[#43bd9f]"
                    : "bg-[#f5f5f5] border-[#bebebe]"
                }`}
              >
                {selectedPlan === "discount" && (
                  <Check className="text-white" size={16} strokeWidth={4} />
                )}
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <p className="text-xs text-center tracking-tight text-[#1b556e] font-medium">
                ✅ Risk-Free: Backed by 60-Day Money-Back Guarantee
              </p>

              <Button className="w-full">
                Continue
                <ArrowRight className="absolute right-4" />
              </Button>

              <p className="underline underline-offset-2 text-[#8d8d8d] text-center mt-3">
                No Thanks, I don&apos;t want my plan.
              </p>
            </div>
          </div>
        </div>
        {/* Money Back Guarantee */}
        <div className="p-4 mt-8 flex items-center">
          <h2 className="text-3xl font-semibold">Money Back Guarantee</h2>
          <img
            src="/images/assets/60-day-guarantee.webp"
            alt="Money Back Guarantee"
            className="h-18 w-auto object-contain"
          />
        </div>
        <p className="text-[#1b556e] p-4 tracking-tight">
          We are confident with our service quality and its results. So, if you
          are ready to reach your goals, it&apos;s a risk-free offer
          <br />
          <br />
          We guarantee you&apos;ll see visible results or you&apos;ll receive a
          full refund within 60 days after your purchase.
          <span className="h-0.5 w-8 bg-[#1b3b48] my-10 block" />
          By continuing, you represent that you are over 18 years of age and
          agree if for whatever reason you&apos;re unhappy with your plan to
          contact customer support for a refund.
          <br />
          <br />
          You will only be charged $67 today for your first quarter (details
          above)
          <br />
          <br />
          Your introductory period will last until Aug 27, 2025. You may cancel
          at any time before Aug 27, 2025, and you will not be charged.
          <br />
          <br />
          If you don&apos;t cancel, KetoSlim will automatically continue your
          membership at the end of your introductory period and charge the
          membership fee of $67 quarterly until you cancel.
          <br />
          <br />
          Your subscription will be bound by our{" "}
          <a href="/terms" className="text-[#f35654] underline">
            Terms of Privacy Policy
          </a>
          .
          <br />
          <br />
          If you would like a refund for any reason call
          <br />
          <a href="tel:1-800-695-5045" className="text-[#f35654] underline">
            1-800-695-5045
          </a>{" "}
          or email{" "}
          <a
            href="mailto:support@myketoslim.com"
            className="text-[#f35654] underline"
          >
            support@myketoslim.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};
