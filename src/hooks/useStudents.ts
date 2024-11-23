import { useState } from "react";
import { Student } from "../lib/types";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const handleRegister = (student: Student) => {
    setStudents([...students, student]);
  };

  const handleWithdraw = (studentId: string) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  return { students, handleRegister, handleWithdraw };
};
