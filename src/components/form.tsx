import { useState } from "react";
import { Student, Tier } from "../lib/types";
import { MAX_STUDENTS, TIERS } from "../lib/constants";
import {
  calculateTotalWithdrawal,
  calculateWeeklyInterest,
} from "../lib/utils";

interface FormProps {
  onRegister: (student: Student) => void;
  studentsCount: number;
}

const Form: React.FC<FormProps> = ({ onRegister, studentsCount }) => {
  const [name, setName] = useState("");
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !selectedTier) return;

    const weeklyInterest = calculateWeeklyInterest(
      selectedTier.amount,
      selectedTier.interestRate
    );
    const totalWithdrawal = calculateTotalWithdrawal(
      selectedTier.amount,
      weeklyInterest
    );

    const newStudent: Student = {
      id: crypto.randomUUID(),
      name,
      tier: selectedTier.id,
      amount: selectedTier.amount,
      weeklyInterest,
      totalWithdrawal,
      joinedAt: new Date(),
    };

    onRegister(newStudent);
    setName("");
    setSelectedTier(null);
  };

  if (studentsCount >= MAX_STUDENTS) {
    return (
      <div className="p-4 bg-yellow-100 rounded-lg">
        Group is full. Please wait for a spot to open.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-96 mx-auto">
      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-10 text-base rounded shadow-sm border border-zinc-800 px-2"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-medium text-gray-600">Select Tier</label>
        <select
          value={selectedTier?.id || ""}
          onChange={(e) => setSelectedTier(TIERS[Number(e.target.value) - 1])}
          className="w-full h-10 text-base rounded shadow-sm border border-zinc-800 px-2"
          required
        >
          <option value="">Select a tier</option>
          {TIERS.map((tier) => (
            <option key={tier.id} value={tier.id}>
              {tier.name} - ₦{tier.amount.toLocaleString()} (
              {tier.interestRate * 100}% interest)
            </option>
          ))}
        </select>
      </div>

      {selectedTier && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <p>
            Weekly Interest: ₦
            {calculateWeeklyInterest(
              selectedTier.amount,
              selectedTier.interestRate
            ).toLocaleString()}
          </p>
          <p>
            Total Withdrawal: ₦
            {calculateTotalWithdrawal(
              selectedTier.amount,
              calculateWeeklyInterest(
                selectedTier.amount,
                selectedTier.interestRate
              )
            ).toLocaleString()}
          </p>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
};

export default Form;
