import Mpro1 from "../assets/images/Mpro1.jpg";
import Mpro3 from "../assets/images/Mpro3.jpg";
import Mpro4 from "../assets/images/Mpro4.jpg";

import Wpro1 from "../assets/images/Wpro1.jpg";
import Wpro2 from "../assets/images/Wpro2.jpg";
import Wpro3 from "../assets/images/Wpro3.jpg";

export const PROGRAMS_DATA = {
  ladies: [
    {
      id: "ladies-toning",
      title: "Ladies' Toning & Fitness",
      description:
        "Focus on full-body toning, strength, and posture with targeted exercises.",
      image: Wpro3,
      alt: "Ladies Toning",
    },
    {
      id: "ladies-weight-loss",
      title: "Weight Loss Program",
      description:
        "Cardio & nutrition support tailored for metabolism and sustainable weight loss.",
      image: Wpro2,
      alt: "Weight Loss",
    },
    {
      id: "ladies-zumba",
      title: "Zumba & Dance Fitness",
      description:
        "High-energy sessions for fitness and stress relief through fun dance routines.",
      image: Wpro1,
      alt: "Zumba",
    },
  ],
  gents: [
    {
      id: "gents-muscle-gain",
      title: "Muscle Gain Program",
      description:
        "Intense strength training focused on hypertrophy and muscle development.",
      image: Mpro4,
      alt: "Muscle Gain",
    },
    {
      id: "gents-fat-burn",
      title: "Fat Burn & Conditioning",
      description:
        "HIIT, circuit training, and cardio-based routines for maximum fat loss.",
      image: Mpro1,
      alt: "Fat Burn",
    },
    {
      id: "gents-strength",
      title: "Strength & Powerlifting",
      description:
        "Heavy lifting for building power and endurance with proper technique.",
      image: Mpro3,
      alt: "Strength",
    },
  ],
};
