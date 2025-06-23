import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import type { FormData } from "../types";
import { Header } from "./ui/Header";
import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  cardConfigs,
  cardVariants,
  swipeConfidenceThreshold,
} from "../constants/cardConfigs";

interface CardWrapperProps {
  formData: FormData;
}

export function CardWrapper({ formData }: CardWrapperProps) {
  const navigate = useNavigate();
  const { cardUrl } = useParams<{ cardUrl: string }>();
  const [direction, setDirection] = useState(0);

  // Find current card based on URL
  const currentCardConfig = cardConfigs.find(
    (config) => config.url === cardUrl
  );
  const currentCard = currentCardConfig?.id || 1;

  // Redirect to first card if URL is invalid
  useEffect(() => {
    if (!currentCardConfig && cardUrl) {
      navigate(`/cards/${cardConfigs[0].url}`, { replace: true });
    }
  }, [currentCardConfig, navigate, cardUrl]);

  const handleNext = () => {
    if (currentCard === 6) {
      navigate("/results");
    } else {
      const nextConfig = cardConfigs.find(
        (config) => config.id === currentCard + 1
      );
      if (nextConfig) {
        setDirection(1);
        navigate(`/cards/${nextConfig.url}`);
      }
    }
  };

  const handleBack = () => {
    if (currentCard === 1) {
      navigate("/");
    } else {
      const prevConfig = cardConfigs.find(
        (config) => config.id === currentCard - 1
      );
      if (prevConfig) {
        setDirection(-1);
        navigate(`/cards/${prevConfig.url}`);
      }
    }
  };

  const handleSwipe = (_: unknown, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold && currentCard < 6) {
      handleNext();
    } else if (swipe > swipeConfidenceThreshold && currentCard > 1) {
      handleBack();
    }
  };

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  if (!currentCardConfig) {
    return (
      <div className="min-h-screen bg-[#F8F4F4] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Loading...
          </h2>
          <p className="text-gray-600">Card URL: {cardUrl}</p>
        </div>
      </div>
    );
  }

  const CardComponent = currentCardConfig.component;

  // Card navigation button labels
  const getBackButtonLabel = () => {
    switch (currentCard) {
      case 2:
        return "Body Fat %";
      case 3:
        return "BMI";
      case 4:
        return "Calorie Needs";
      case 5:
        return "Water Intake";
      case 6:
        return "Weight Rate";
      default:
        return "Back";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F4F4] p-4">
      <div className="max-w-md mx-auto">
        {/* Static Header */}
        <Header currentCard={currentCard} totalCards={6} />

        {/* Animated Card Content */}
        <div className="relative">
          {/* Static Stacked Cards Background */}
          <div className="absolute top-3 left-0 right-0 h-full bg-white rounded-3xl shadow-lg"></div>
          <div className="absolute top-1.5 left-0 right-0 h-full bg-white rounded-3xl shadow-lg"></div>

          {/* Animated Front Card */}
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={cardUrl}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={handleSwipe}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <CardComponent formData={formData} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Static Navigation Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-16">
          {currentCard > 1 ? (
            <Button onClick={handleBack} variant="outline">
              {getBackButtonLabel()}
              <ArrowLeft strokeWidth={3} className="size-6 absolute left-2" />
            </Button>
          ) : (
            <div></div>
          )}
          <Button onClick={handleNext}>
            Next
            <ArrowRight strokeWidth={3} className="size-6 absolute right-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
