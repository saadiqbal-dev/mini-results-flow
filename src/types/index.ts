export interface FormData {
  gender: "male" | "female" | "";
  bodyFatPercent: number;
  BMI: number;
  calorieTarget: number;
  waterIntake: number;
  weightLossRate: number;
  seeResultsDays: number;
}

export interface CardProps {
  formData: FormData;
  onNext: () => void;
  onBack?: () => void;
  currentCard: number;
  totalCards: number;
}
