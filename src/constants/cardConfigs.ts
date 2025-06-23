import {
  BodyFatCard,
  BMICard,
  CalorieCard,
  WaterCard,
  WeightLossCard,
  ResultsTimelineCard,
} from "../components/cards";

// Card configuration with URLs
export const cardConfigs = [
  { id: 1, component: BodyFatCard, url: "body-fat" },
  { id: 2, component: BMICard, url: "bmi" },
  { id: 3, component: CalorieCard, url: "calorie" },
  { id: 4, component: WaterCard, url: "water" },
  { id: 5, component: WeightLossCard, url: "weight-loss" },
  { id: 6, component: ResultsTimelineCard, url: "results-timeline" },
];

// Animation variants for card transitions
export const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

export const swipeConfidenceThreshold = 10000;
