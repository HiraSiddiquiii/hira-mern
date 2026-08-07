import { useState, useEffect } from "react";
import API from "../api";

function StudentForm({ addStudent, editStudent, clearEdit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setEmail(editStudent.email);
      setCourse(editStudent.course);
      setMarks(editStudent.marks);
    }
  }, [editStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentData = {
      name,
      email,
      course,
      marks: Number(marks),
    };

    try {
      if (editStudent) {
        await API.put(`/students/${editStudent._id}`, studentData);
      } else {
        await API.post("/students", studentData);
      }

      setName("");
      setEmail("");
      setCourse("");
      setMarks("");

      clearEdit();

      addStudent();

    } catch (err) {
      alert(err.response?.data?.message || "Operation Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        required
      />

      <button type="submit">
        {editStudent ? "Update Student" : "Add Student"}
      </button>

    </form>
  );
}

export default StudentForm;