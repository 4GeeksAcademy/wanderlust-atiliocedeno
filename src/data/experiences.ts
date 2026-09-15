import { Experience } from "@/types/experience";

const seeds: Array<[string, string, string, string, number, number]> = [
  ["Sunrise Kayak Escape", "Adventure", "Split, Croatia", "Paddle through quiet coves as the coast wakes up.", 89, 4.9],
  ["Hidden Market Bites", "Food", "Lisbon, Portugal", "Taste local specialties with a passionate neighborhood host.", 64, 4.8],
  ["Old Town Story Walk", "Culture", "Kyoto, Japan", "Uncover centuries of stories among intimate historic lanes.", 52, 4.7],
  ["Forest Breathwork", "Wellness", "Queenstown, New Zealand", "Reset your rhythm with a mindful session in native forest.", 76, 4.9],
  ["Alpine Wildflower Hike", "Nature", "Interlaken, Switzerland", "A scenic trail filled with mountain views and wildflowers.", 110, 4.8],
  ["Desert Stargazing", "Nature", "Wadi Rum, Jordan", "Sleep under a velvet sky and learn the constellations.", 120, 4.9],
  ["Ceramics by the Sea", "Culture", "Barcelona, Spain", "Shape a keepsake inspired by Mediterranean textures.", 71, 4.6],
  ["Truffle Hunt & Lunch", "Food", "Istria, Croatia", "Search for prized truffles before a long farmhouse lunch.", 135, 4.9],
  ["Cliffside Yoga", "Wellness", "Uluwatu, Indonesia", "Move slowly above the ocean at golden hour.", 48, 4.7],
  ["Rainforest Zipline", "Adventure", "La Fortuna, Costa Rica", "Soar above lush canopy and volcanic landscapes.", 98, 4.8],
];

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const [title, category, destination, description, price, rating] = seeds[index % seeds.length];
  const cycle = Math.floor(index / seeds.length) + 1;
  return {
    id: `experience-${index + 1}`,
    title: cycle === 1 ? title : `${title} · Edition ${cycle}`,
    description,
    category: category as Experience["category"],
    destination,
    price: price + (cycle - 1) * 7,
    rating,
    imageUrl: `https://images.unsplash.com/photo-${["1500530855697-b586d89ba3ee", "1507525428034-b723cf961d3e", "1493976040374-85c8e12f0c0e", "1545389336-cf090694435e", "1464822759023-fed622ff2c3b"][index % 5]}?auto=format&fit=crop&w=900&q=80`,
  };
});

export const categories = ["Adventure", "Culture", "Food", "Wellness", "Nature"] as const;
export const destinations = Array.from(new Set(experiences.map((experience) => experience.destination))).sort();
