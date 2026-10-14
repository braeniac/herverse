import {
  Flower2,
  AudioLines,
  Activity,
  Trees,
  HeartHandshake,
  Compass,
  Palette,
  TentTree,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export const experiences: Experience[] = [
  {
    icon: Flower2,
    name: "Mindfulness & Wellness",
    description: "Meditation, sound therapy, mindfulness, and self-care.",
  },
  {
    icon: Activity,
    name: "Movement & Yoga",
    description: "Yoga, movement, and mindful exercise.",
  },
  {
    icon: Trees,
    name: "Nature & Adventure",
    description: "Nature walks, hiking, outdoor activities, and adventure.",
  },
  {
    icon: Palette,
    name: "Creativity & Expression",
    description: "Creative workshops, artistic activities, and self-expression.",
  },
  {
    icon: HeartHandshake,
    name: "Community & Connection",
    description: "Book clubs, meaningful conversations, social gatherings, and shared experiences.",
  },
  {
    icon: TentTree,
    name: "Retreats & Experiences",
    description: "Women’s retreats, special events, and immersive experiences.",
  },
];
export const events = [
  {
    date: "COMING SOON",
    title: "Mindful Morning",
    tags: "Meditation  /  Connection",
    place: "Ontario",
  },
  {
    date: "COMING SOON",
    title: "Hike & Heal",
    tags: "Nature  /  Movement  /  Sisterhood",
    place: "Ontario",
  },
  {
    date: "COMING SOON",
    title: "Creative Circle",
    tags: "Creativity  /  Conversation",
    place: "Ontario",
  },
  {
    date: "COMING SOON",
    title: "Moonlight Circle",
    tags: "Reflection  /  Sound  /  Sisterhood",
    place: "Ontario",
  },
];
export const photos = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=3840&q=85",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
];

export type Experience = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export type HomepageEvent = (typeof events)[number];

export const activityCategories = [
  { name: "MEDITATION", icon: Flower2 },
  { name: "SOUND THERAPY", icon: AudioLines },
  { name: "MOVEMENT", icon: Activity },
  { name: "NATURE", icon: Trees },
  { name: "CONNECTION", icon: HeartHandshake },
  { name: "ADVENTURE", icon: Compass },
];
