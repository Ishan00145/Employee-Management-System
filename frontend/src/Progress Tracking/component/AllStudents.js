import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

export default function ViewEmployee() {
  const [students, setStudents] = useState([]);
  const [isEditing, setIsEditing] = useState({}); // Object to track editing state

  // Function to fetch students from the database
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8070/student"); // Replace with your actual API endpoint
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []); // Empty dependency array ensures it runs only once

  const handleEditClick = (_id) => {
    setIsEditing((prevEditing) => ({ ...prevEditing, [_id]: true }));
  };

  const handleUpdate = async (_id) => {
    const updatedStudent = students.find((s) => s._id === _id);
    if (updatedStudent) {
      try {
        await axios.put(`http://localhost:8070/student/update/${_id}`, updatedStudent);
        setStudents((prevStudents) =>
          prevStudents.map((s) => (s._id === _id ? updatedStudent : s))
        );
        setIsEditing((prevEditing) => ({ ...prevEditing, [_id]: false }));
        alert("Employee progress Updated");
      } catch (error) {
        console.error("Error updating student:", error);
        alert("Error updating student data");
      }
    }
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:8070/student/delete/${_id}`);
      setStudents((prevStudents) =>
        prevStudents.filter((s) => s._id !== _id)
      );
      setIsEditing((prevEditing) => {
        const { [_id]: deleted, ...rest } = prevEditing;
        return rest;
      });
      alert("Employee progress Deleted");
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Error deleting student data");
    }
  };

  const ComponentsRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    documentTitle: "EmployeeProgressReport",
  });
  

  return (
    <div className="container mt-3" ref={ComponentsRef}>
      <h1>View Progress of Employees</h1>
      <button onClick={handlePrint}>Generate Report</button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Experience</th>
            <th scope="col">Department</th>
            <th scope="col">Education</th>
            <th scope="col">Goal Achieved</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student._id}>
                {isEditing[student._id] ? (
                  <>
                    <td>
                      <input
                        type="text"
                        defaultValue={student.name}
                        onChange={(e) => {
                          setStudents((prevStudents) =>
                            prevStudents.map((s) =>
                              s._id === student._id
                                ? { ...s, name: e.target.value }
                                : s
                            )
                          );
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        defaultValue={student.age}
                        onChange={(e) => {
                          setStudents((prevStudents) =>
                            prevStudents.map((s) =>
                              s._id === student._id
                                ? { ...s, age: e.target.value }
                                : s
                            )
                          );
                        }}
                      />
                    </td>
                    {/* ... other input fields for editable properties ... */}
                    <td>
                      <button onClick={() => handleUpdate(student._id)}>
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.experience}</td>
                    <td>{student.department}</td>
                    <td>{student.educationlevel}</td>
                    <td>{student.goal}</td>
                    <td>
                      <button onClick={() => handleEditClick(student._id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(student._id)}>
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Loading Students...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
