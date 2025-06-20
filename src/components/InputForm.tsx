import React, { useState } from "react";
import type { FormData } from "../types";

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
        <div className="text-center mb-8">
          <div className="text-[#36BC9F] font-inter font-semibold text-2xl mb-4">
            KETOSLIM
          </div>
          <h1 className="text-[#183B49] font-inter font-semibold text-3xl leading-tight mb-4">
            Let's Create Your Personalized Plan
          </h1>
        </div>

        <div className="space-y-6">
          {/* Gender */}
          <div className="bg-white rounded-xl p-4">
            <label className="block text-[#183B49] font-inter font-semibold mb-3">
              Gender
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: "male" })}
                className={`flex-1 py-3 px-4 rounded-lg font-inter font-medium transition-colors ${
                  formData.gender === "male"
                    ? "bg-[#36BC9F] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, gender: "female" })}
                className={`flex-1 py-3 px-4 rounded-lg font-inter font-medium transition-colors ${
                  formData.gender === "female"
                    ? "bg-[#36BC9F] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Female
              </button>
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
            )}
          </div>

          {/* Body Fat % */}
          <div className="bg-white rounded-xl p-4">
            <label className="block text-[#183B49] font-inter font-semibold mb-3">
              Body Fat % ({formData.bodyFatPercent}%)
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={formData.bodyFatPercent}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bodyFatPercent: parseInt(e.target.value),
                })
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* BMI */}
          <div className="bg-white rounded-xl p-4">
            <label className="block text-[#183B49] font-inter font-semibold mb-3">
              BMI ({formData.BMI})
            </label>
            <input
              type="range"
              min="0"
              max="40"
              step="0.1"
              value={formData.BMI}
              onChange={(e) =>
                setFormData({ ...formData, BMI: parseFloat(e.target.value) })
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Daily Calorie Target */}
          <div className="bg-white rounded-xl p-4">
            <label className="block text-[#183B49] font-inter font-semibold mb-3">
              Daily Calorie Target
            </label>
            <input
              type="number"
              value={formData.calorieTarget}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  calorieTarget: parseInt(e.target.value) || 0,
                })
              }
              className="w-full py-3 px-4 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#36BC9F] focus:border-transparent"
              placeholder="Enter calories"
            />
            {errors.calorieTarget && (
              <p className="text-red-500 text-sm mt-1">
                {errors.calorieTarget}
              </p>
            )}
          </div>

          {/* Water Intake */}
          <div className="bg-white rounded-xl p-4">
            <label className="block text-[#183B49] font-inter font-semibold mb-3">
              Cups of Water Per Day
            </label>
            <select
              value={formData.waterIntake}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  waterIntake: parseInt(e.target.value),
                })
              }
              className="w-full py-3 px-4 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#36BC9F] focus:border-transparent"
            >
              <option value={1}>1 cup</option>
              <option value={2}>2 cups</option>
              <option value={4}>4 cups</option>
              <option value={6}>6 cups</option>
            </select>
          </div>

          {/* Weekly Weight Loss Goal */}
          <div className="bg-white rounded-xl p-4">
            <label className="block text-[#183B49] font-inter font-semibold mb-3">
              Weekly Weight Loss Goal (lbs)
            </label>
            <input
              type="number"
              step="0.1"
              value={formData.weightLossRate}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  weightLossRate: parseFloat(e.target.value) || 0,
                })
              }
              className="w-full py-3 px-4 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#36BC9F] focus:border-transparent"
              placeholder="Enter lbs per week"
            />
            {errors.weightLossRate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.weightLossRate}
              </p>
            )}
          </div>

          {/* Days to See Results */}
          <div className="bg-white rounded-xl p-4">
            <label className="block text-[#183B49] font-inter font-semibold mb-3">
              Days to See Results
            </label>
            <input
              type="number"
              value={formData.seeResultsDays}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  seeResultsDays: parseInt(e.target.value) || 0,
                })
              }
              className="w-full py-3 px-4 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-[#36BC9F] focus:border-transparent"
              placeholder="Enter number of days"
            />
            {errors.seeResultsDays && (
              <p className="text-red-500 text-sm mt-1">
                {errors.seeResultsDays}
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full py-4 rounded-xl font-inter font-semibold text-lg transition-colors ${
              isFormValid
                ? "bg-[#36BC9F] text-white hover:bg-[#2A9A82]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Get My Personalized Results
          </button>
        </div>
      </div>
    </div>
  );
};
