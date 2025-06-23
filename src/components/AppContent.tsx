import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import type { FormData } from "../types";
import { InputForm } from "./InputForm";
import { SalespageCard } from "./SalespageCard";
import { CardWrapper } from "./CardWrapper";
import { cardConfigs } from "../constants/cardConfigs";

export function AppContent() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Load form data from localStorage on mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('mini-results-flow-formData');
    if (savedFormData) {
      try {
        setFormData(JSON.parse(savedFormData));
      } catch (error) {
        console.error('Error parsing saved form data:', error);
        localStorage.removeItem('mini-results-flow-formData');
      }
    }
    setIsLoading(false);
  }, []);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    // Save to localStorage for persistence across page refreshes
    localStorage.setItem('mini-results-flow-formData', JSON.stringify(data));
    navigate(`/cards/${cardConfigs[0].url}`);
  };

  // Show loading state while checking for saved data
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8F4F4] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<InputForm onSubmit={handleFormSubmit} />} />
      <Route
        path="/cards/:cardUrl"
        element={
          formData ? (
            <CardWrapper formData={formData} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/results"
        element={
          formData ? (
            <SalespageCard formData={formData} />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      {/* Redirect /cards to first card */}
      <Route
        path="/cards"
        element={<Navigate to={`/cards/${cardConfigs[0].url}`} replace />}
      />
    </Routes>
  );
}
