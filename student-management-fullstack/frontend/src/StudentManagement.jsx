import { useEffect, useState } from "react";
import API from "./api";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data.students);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    fetchStudents();
  };

  const filteredStudents = students.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCourse =
      course === "" || student.course === course;

    return matchesName && matchesCourse;
  });

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">

      <h1>Student Management System</h1>

      <StudentForm
        addStudent={fetchStudents}
        editStudent={editingStudent}
        clearEdit={() => setEditingStudent(null)}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Filter
        course={course}
        setCourse={setCourse}
      />

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        editStudent={setEditingStudent}
      />

    </div>
  );
}

export default StudentManagement;