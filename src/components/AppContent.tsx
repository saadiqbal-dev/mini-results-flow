import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import type { FormData } from "../types";
import { InputForm } from "./InputForm";
import { SalespageCard } from "./SalespageCard";
import { CardWrapper } from "./CardWrapper";
import { cardConfigs } from "../constants/cardConfigs";

export function AppContent() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const navigate = useNavigate();

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    navigate(`/cards/${cardConfigs[0].url}`);
  };

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
