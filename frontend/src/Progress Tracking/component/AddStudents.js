import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [department, setDepartment] = useState("");
  const [educationlevel, setEducationlevel] = useState("");
  const [goal, setGoal] = useState("");

  function sendData(e) {
    e.preventDefault();

    // Simple form validation
    if (!name || !age || !experience || !department || !educationlevel || !goal) { //all must be filled
      alert("Please fill in all fields");
      return;
    }

    if (isNaN(age) || age < 0 || age > 120) {
      alert("Please enter a valid age (between 0 and 120)");
      return;
    }

    const newStudent = {
      name,
      age,
      experience,
      department,
      educationlevel,
      goal,
    };

    axios
      .post("http://localhost:8070/student/add", newStudent)
      .then(() => {
        alert("Employee progress Added");
        setName("");
        setAge("");
        setExperience("");
        setDepartment("");
        setEducationlevel("");
        setGoal("");
        setSubmitted(false);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <h1>Progress Tracking</h1>

      <form onSubmit={sendData}>
        <div className="form-group">
          <label htmlFor="name">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Employee name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Employee age</label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter student age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Employee experience (year)</label>
          <input
            type="text"
            className="form-control"
            id="experience"
            placeholder="Enter Employee experience"
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Employee department</label>
          <input
            type="text"
            className="form-control"
            id="department"
            placeholder="Enter employee department"
            value={department}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Employee Education level</label>
          <input
            type="text"
            className="form-control"
            id="aducation"
            placeholder="Enter Employee education"
            value={educationlevel}
            onChange={(e) => {
              setEducationlevel(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Employee achieved goals</label>
          <input
            type="text"
            className="form-control"
            id="goal"
            placeholder="Enter employee goals"
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
