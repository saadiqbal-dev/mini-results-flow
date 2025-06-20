import React, { useState } from "react";
import type { FormData } from "../types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Header } from "./ui/Header";

interface InputFormProps {
  onSubmit: (data: FormData) => void;
}

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    gender: "",
    bodyFatPercent: 25,
    BMI: 25,
    calorieTarget: 1500,
    waterIntake: 4,
    weightLossRate: 2,
    seeResultsDays: 10,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.gender) newErrors.gender = "Please select your gender";
    if (formData.calorieTarget <= 0)
      newErrors.calorieTarget = "Please enter a valid calorie target";
    if (formData.weightLossRate <= 0)
      newErrors.weightLossRate = "Please enter a valid weight loss rate";
    if (formData.seeResultsDays <= 0)
      newErrors.seeResultsDays = "Please enter valid days";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const isFormValid =
    formData.gender &&
    formData.calorieTarget > 0 &&
    formData.weightLossRate > 0 &&
    formData.seeResultsDays > 0;
  return (
    <div className="min-h-screen bg-[#F8F4F4] p-4">
      <div className="max-w-md mx-auto">
        <Header currentCard={1} totalCards={7} />

        {/* Stacked cards effect */}
        <div className="relative">
          {/* Bottom card (furthest back) */}
          <div className="absolute top-3 left-0 right-0 h-full bg-white rounded-3xl shadow-lg transform"></div>

          {/* Middle card */}
          <div className="absolute top-1.5 left-0 right-0 h-full bg-white rounded-3xl shadow-lg transform"></div>

          {/* Front card (main content) */}
          <div className="relative bg-white rounded-3xl p-6 shadow-lg transform transition-transform">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4 text-[34px]">📝</div>
              <h1 className="text-[#183B49] font-inter font-semibold text-[34px] leading-[1.2] mb-2">
                Let's Create Your{" "}
                <span className="text-[#F75950]">Personalized</span> Plan
              </h1>
            </div>

            <div className="space-y-4">
              {/* Gender */}
              <div className="mb-4">
                <label className="block text-[#183B49] font-inter font-semibold mb-3">
                  Gender
                </label>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    onClick={() => setFormData({ ...formData, gender: "male" })}
                    variant={formData.gender === "male" ? "default" : "outline"}
                    className={`flex-1 py-3 ${
                      formData.gender === "male"
                        ? "bg-[#36BC9F] hover:bg-[#2A9A82] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Male
                  </Button>
                  <Button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, gender: "female" })
                    }
                    variant={
                      formData.gender === "female" ? "default" : "outline"
                    }
                    className={`flex-1 py-3 ${
                      formData.gender === "female"
                        ? "bg-[#36BC9F] hover:bg-[#2A9A82] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Female
                  </Button>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                )}
              </div>{" "}
              {/* Body Fat % */}
              <div className="mb-4">
                <label className="block text-[#183B49] font-inter font-semibold mb-3">
                  Body Fat % ({formData.bodyFatPercent}%)
                </label>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Slider
                    value={[formData.bodyFatPercent]}
                    onValueChange={(value) =>
                      setFormData({
                        ...formData,
                        bodyFatPercent: value[0],
                      })
                    }
                    min={0}
                    max={100}
                    step={1}
                    className="w-full [&_[data-slot=slider-track]]:bg-gray-200 [&_[data-slot=slider-range]]:bg-[#36BC9F] [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-thumb]]:border-[#36BC9F] [&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-thumb]]:border-2"
                  />
                </div>
              </div>{" "}
              {/* BMI */}
              <div className="mb-4">
                <label className="block text-[#183B49] font-inter font-semibold mb-3">
                  BMI ({formData.BMI})
                </label>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Slider
                    value={[formData.BMI]}
                    onValueChange={(value) =>
                      setFormData({ ...formData, BMI: value[0] })
                    }
                    min={0}
                    max={40}
                    step={0.1}
                    className="w-full [&_[data-slot=slider-track]]:bg-gray-200 [&_[data-slot=slider-range]]:bg-[#36BC9F] [&_[data-slot=slider-thumb]]:bg-white [&_[data-slot=slider-thumb]]:border-[#36BC9F] [&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-thumb]]:border-2"
                  />
                </div>
              </div>{" "}
              {/* Daily Calorie Target */}
              <div className="mb-4">
                <label className="block text-[#183B49] font-inter font-semibold mb-3">
                  Daily Calorie Target
                </label>
                <Input
                  type="number"
                  value={formData.calorieTarget}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      calorieTarget: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full py-3 px-4 bg-gray-50 border-gray-200 rounded-lg focus:border-[#36BC9F] focus:ring-[#36BC9F]/20 text-[#183B49] font-inter placeholder:text-gray-400"
                  placeholder="Enter calories"
                />
                {errors.calorieTarget && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.calorieTarget}
                  </p>
                )}
              </div>{" "}
              {/* Water Intake */}
              <div className="mb-4">
                <label className="block text-[#183B49] font-inter font-semibold mb-3">
                  Cups of Water Per Day
                </label>
                <Select
                  value={formData.waterIntake.toString()}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      waterIntake: parseInt(value),
                    })
                  }
                >
                  <SelectTrigger className="w-full py-3 px-4 bg-gray-50 border-gray-200 rounded-lg focus:border-[#36BC9F] focus:ring-[#36BC9F]/20 text-[#183B49] font-inter">
                    <SelectValue placeholder="Select cups of water" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 cup</SelectItem>
                    <SelectItem value="2">2 cups</SelectItem>
                    <SelectItem value="4">4 cups</SelectItem>
                    <SelectItem value="6">6 cups</SelectItem>
                  </SelectContent>
                </Select>
              </div>{" "}
              {/* Weekly Weight Loss Goal */}
              <div className="mb-4">
                <label className="block text-[#183B49] font-inter font-semibold mb-3">
                  Weekly Weight Loss Goal (lbs)
                </label>
                <Input
                  type="number"
                  step="0.1"
                  value={formData.weightLossRate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      weightLossRate: parseFloat(e.target.value) || 0,
                    })
                  }
                  className="w-full py-3 px-4 bg-gray-50 border-gray-200 rounded-lg focus:border-[#36BC9F] focus:ring-[#36BC9F]/20 text-[#183B49] font-inter placeholder:text-gray-400"
                  placeholder="Enter lbs per week"
                />
                {errors.weightLossRate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.weightLossRate}
                  </p>
                )}
              </div>{" "}
              {/* Days to See Results */}
              <div className="mb-4">
                <label className="block text-[#183B49] font-inter font-semibold mb-3">
                  Days to See Results
                </label>
                <Input
                  type="number"
                  value={formData.seeResultsDays}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      seeResultsDays: parseInt(e.target.value) || 0,
                    })
                  }
                  className="w-full py-3 px-4 bg-gray-50 border-gray-200 rounded-lg focus:border-[#36BC9F] focus:ring-[#36BC9F]/20 text-[#183B49] font-inter placeholder:text-gray-400"
                  placeholder="Enter number of days"
                />
                {errors.seeResultsDays && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.seeResultsDays}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full transition-colors ${
              isFormValid
                ? "bg-[#36BC9F] text-white hover:bg-[#2A9A82]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Get My Personalized Results
          </Button>
        </div>
      </div>
    </div>
  );
};
