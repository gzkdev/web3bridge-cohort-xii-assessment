import { Student } from "../lib/types";

interface DashboardProps {
  students: Student[];
  onWithdraw: (studentId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ students, onWithdraw }) => {
  const totalSavings = students.reduce(
    (sum, student) => sum + student.amount,
    0
  );
  const totalInterest = students.reduce(
    (sum, student) => sum + student.weeklyInterest,
    0
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium">Total Savings</h3>
          <p className="text-2xl font-bold">₦{totalSavings.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-medium">Total Weekly Interest</h3>
          <p className="text-2xl font-bold">
            ₦{totalInterest.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-xs">
            <tr className="text-left tracking-wider uppercase">
              <th className="px-6 py-3 font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 font-medium text-gray-500">Tier</th>
              <th className="px-6 py-3 font-medium text-gray-500">Amount</th>
              <th className="px-6 py-3 font-medium text-gray-500">
                Weekly Interest
              </th>
              <th className="px-6 py-3 font-medium text-gray-500">
                Total Withdrawal
              </th>
              <th className="px-6 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Tier {student.tier}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ₦{student.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ₦{student.weeklyInterest.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  ₦{student.totalWithdrawal.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => onWithdraw(student.id)}
                    className="text-red-600 hover:text-red-900 hover:bg-red-200 px-2 rounded py-1 transition -mx-2"
                  >
                    Withdraw
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
