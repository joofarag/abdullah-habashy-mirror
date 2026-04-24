export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number | null;
  currency: string;
  subject: string;
  grade: string;
  type: string;
  author: {
    name: string;
    avatar: string;
  };
  isFree: boolean;
  createdAt: string;
}

export interface Subject {
  id: string;
  name: string;
  grade: string;
  icon: string;
  courseCount: number;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  score: number;
  grade: string;
  subject: string;
}

export interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
  inStock: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  grade: string;
}
