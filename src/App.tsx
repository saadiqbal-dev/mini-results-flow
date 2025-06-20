import { useState } from "react";
import type { FormData } from "./types";
import { InputForm } from "./components/InputForm";
import { SalespageCard } from "./components/SalespageCard";
import {
  BodyFatCard,
  BMICard,
  CalorieCard,
  WaterCard,
  WeightLossCard,
  ResultsTimelineCard,
} from "./components/cards";

export default function App() {
  const [currentStep, setCurrentStep] = useState<
    "form" | "cards" | "salespage"
  >("form");
  const [currentCard, setCurrentCard] = useState(1);
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    setCurrentStep("cards");
  };

  const handleNext = () => {
    if (currentCard === 6) {
      setCurrentStep("salespage");
    } else {
      setCurrentCard(currentCard + 1);
    }
  };

  const handleBack = () => {
    if (currentCard === 1) {
      setCurrentStep("form");
    } else {
      setCurrentCard(currentCard - 1);
    }
  };

  if (currentStep === "form") {
    return <InputForm onSubmit={handleFormSubmit} />;
  }

  if (currentStep === "salespage" && formData) {
    return <SalespageCard formData={formData} />;
  }

  if (currentStep === "cards" && formData) {
    const cardProps = {
      formData,
      onNext: handleNext,
      onBack: currentCard > 1 ? handleBack : undefined,
      currentCard,
      totalCards: 6,
    };

    switch (currentCard) {
      case 1:
        return <BodyFatCard {...cardProps} />;
      case 2:
        return <BMICard {...cardProps} />;
      case 3:
        return <CalorieCard {...cardProps} />;
      case 4:
        return <WaterCard {...cardProps} />;
      case 5:
        return <WeightLossCard {...cardProps} />;
      case 6:
        return <ResultsTimelineCard {...cardProps} />;
      default:
        return <BodyFatCard {...cardProps} />;
    }
  }

  return null;
}
