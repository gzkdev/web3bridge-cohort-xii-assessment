import { Tier } from "./types";

export const MAX_STUDENTS = 12;

export const TIERS: Tier[] = [
  { id: 1, amount: 10000, interestRate: 0.05, name: "Tier 1" },
  { id: 2, amount: 20000, interestRate: 0.1, name: "Tier 2" },
  { id: 3, amount: 30000, interestRate: 0.2, name: "Tier 3" },
];
