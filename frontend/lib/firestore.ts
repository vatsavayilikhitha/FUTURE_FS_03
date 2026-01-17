import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

// Types (clean)
export type Movie = {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
  trending: boolean;
  createdAt?: Timestamp;
};

export type Category = {
  id: string;
  name: string;
  countText: string;
  order: number;
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  desc: string;
  highlight: boolean;
  features: string[];
  order: number;
};

export async function getTrendingMovies(): Promise<Movie[]> {
  const q = query(
    collection(db, "movies"),
    where("trending", "==", true),
    orderBy("createdAt", "desc")
  );

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Movie, "id">) }));
}

export async function getCategories(): Promise<Category[]> {
  const q = query(collection(db, "categories"), orderBy("order", "asc"));

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Category, "id">),
  }));
}

export async function getPlans(): Promise<Plan[]> {
  const q = query(collection(db, "plans"), orderBy("order", "asc"));

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Plan, "id">),
  }));
}
