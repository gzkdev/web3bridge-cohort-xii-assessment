export enum View {
  FORM,
  DASHBOARD,
}

export interface Student {
  id: string;
  name: string;
  tier: number;
  amount: number;
  weeklyInterest: number;
  totalWithdrawal: number;
  joinedAt: Date;
}

export interface Tier {
  id: number;
  amount: number;
  interestRate: number;
  name: string;
}
