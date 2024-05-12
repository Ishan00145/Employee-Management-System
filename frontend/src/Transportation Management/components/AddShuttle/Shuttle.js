import React, { useState } from "react";
import axios from "axios";

const AddShuttle = () => {
  const [shuttleData, setShuttleData] = useState({
    VehicleNumber: "",
    Route: "",
    VehicleType: "",
    DriverName: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShuttleData({ ...shuttleData, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!shuttleData.VehicleNumber.trim()) {
      newErrors.vehicleNumber = "Vehicle number is required";
    } else if (!/^[a-zA-Z0-9]+$/.test(shuttleData.VehicleNumber.trim())) {
      newErrors.vehicleNumber = "Vehicle number should contain only letters and numbers";
    }
    if (!shuttleData.Route.trim()) {
      newErrors.route = "Route is required";
    }
    if (!shuttleData.VehicleType.trim()) {
      newErrors.vehicleType = "Vehicle type is required";
    }
    if (!shuttleData.DriverName.trim()) {
      newErrors.driverName = "Driver name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(shuttleData.DriverName.trim())) {
      newErrors.driverName = "Driver name should contain only letters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post("http://localhost:8070/shuttle/shuttleadd", shuttleData);
      alert("Shuttle Added");
      setShuttleData({
        VehicleNumber: "",
        Route: "",
        VehicleType: "",
        DriverName: ""
      });
      setErrors({});
    } catch (error) {
      alert("Error adding shuttle: " + error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="VehicleNumber" className="form-label">
            Vehicle Number
          </label>
          <input
            type="text"
            className={`form-control ${errors.vehicleNumber && "is-invalid"}`}
            id="VehicleNumber"
            name="VehicleNumber"
            placeholder="Enter your VehicleNumber"
            value={shuttleData.VehicleNumber}
            onChange={handleChange}
          />
          {errors.vehicleNumber && (
            <div className="invalid-feedback">{errors.vehicleNumber}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="Route" className="form-label">
            Route
          </label>
          <select
            className={`form-control ${errors.route && "is-invalid"}`}
            id="Route"
            name="Route"
            value={shuttleData.Route}
            onChange={handleChange}
          >
            <option value="">Select a Route</option>
            <option value="Colombo">Colombo</option>
            <option value="Kaduwela">Kaduwela</option>
            <option value="Gampaha">Gampaha</option>
          </select>
          {errors.route && <div className="invalid-feedback">{errors.route}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="VehicleType" className="form-label">
            Vehicle Type
          </label>
          <select
            className={`form-control ${errors.vehicleType && "is-invalid"}`}
            id="VehicleType"
            name="VehicleType"
            value={shuttleData.VehicleType}
            onChange={handleChange}
          >
            <option value="">Vehicle Type</option>
            <option value="Van-AC">Van-AC</option>
            <option value="Van-Non-AC">Van-Non-AC</option>
            <option value="Bus-AC">Bus-AC</option>
            <option value="Bus-Non-AC">Bus-Non-AC</option>
          </select>
          {errors.vehicleType && (
            <div className="invalid-feedback">{errors.vehicleType}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="DriverName" className="form-label">
            Driver Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.driverName && "is-invalid"}`}
            id="DriverName"
            name="DriverName"
            placeholder="Enter Driver Name"
            value={shuttleData.DriverName}
            onChange={handleChange}
          />
          {errors.driverName && (
            <div className="invalid-feedback">{errors.driverName}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddShuttle;
