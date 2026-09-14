export type Category = "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: Category;
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}
