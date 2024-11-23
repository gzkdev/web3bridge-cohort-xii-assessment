import { Student } from "../lib/types";
import { useLocalStorage } from "usehooks-ts";

export const useStudents = () => {
  const [students, setStudents] = useLocalStorage<Student[]>("students", []);

  const handleRegister = (student: Student) => {
    setStudents([...students, student]);
  };

  const handleWithdraw = (studentId: string) => {
    setStudents(students.filter((student) => student.id !== studentId));
  };

  return { students, handleRegister, handleWithdraw };
};
