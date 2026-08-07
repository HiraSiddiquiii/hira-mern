function StudentList({ students, deleteStudent, editStudent }) {

    if (students.length === 0) {
        return <h2>No Students Found</h2>;
    }

    return (
        <div>

            {students.map((student) => (

                <div
                    key={student._id}
                    className="student-card"
                >

                    <h3>{student.name}</h3>

                    <p>
                        <strong>Email:</strong> {student.email}
                    </p>

                    <p>
                        <strong>Course:</strong> {student.course}
                    </p>

                    <p>
                        <strong>Marks:</strong> {student.marks}
                    </p>

                    <div style={{ display: "flex", gap: "10px" }}>

                        <button
                            onClick={() => editStudent(student)}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => deleteStudent(student._id)}
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>
    );
}

export default StudentList;