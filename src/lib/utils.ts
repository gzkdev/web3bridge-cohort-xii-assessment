export const calculateWeeklyInterest = (
  amount: number,
  interestRate: number
): number => {
  return amount * interestRate;
};

export const calculateTotalWithdrawal = (
  amount: number,
  weeklyInterest: number
): number => {
  return amount + weeklyInterest;
};
