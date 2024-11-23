import { useState } from "react";
import { useStudents } from "./hooks/useStudents";

import Form from "./components/form";
import Dashboard from "./components/dashboard";
import ViewTab from "./components/view-tab";

import { View } from "./lib/types";

function App() {
  const [view, setView] = useState<View>(View.FORM);
  const { students, handleRegister, handleWithdraw } = useStudents();

  return (
    <div className="py-10 px-6 mx-auto max-w-screen-lg space-y-6">
      <div className="text-xl md:text-4xl text-center">Student Savings App</div>
      <ViewTab setView={setView} view={view} />
      {view === View.FORM ? (
        <Form onRegister={handleRegister} studentsCount={students.length} />
      ) : view === View.DASHBOARD ? (
        <Dashboard onWithdraw={handleWithdraw} students={students} />
      ) : null}
    </div>
  );
}

export default App;
