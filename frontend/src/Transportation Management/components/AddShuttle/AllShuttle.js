import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';
import { useReactToPrint } from 'react-to-print';

const AllShuttle = () => {
  const [query, setQuery] = useState('');
  const [shuttles, setShuttles] = useState([]);
  const [filteredShuttles, setFilteredShuttles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedShuttle, setEditedShuttle] = useState({
    VehicleNumber: '',
    Route: '',
    VehicleType: '',
    DriverName: '',
  });
  const [editedShuttleId, setEditedShuttleId] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [errors, setErrors] = useState({});
  const ComponentsRef = useRef();

  useEffect(() => {
    axios
      .get('http://localhost:8070/shuttle/shuttles')
      .then((res) => {
        setShuttles(res.data);
        setFilteredShuttles(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Filter shuttles based on the selected route
    if (selectedRoute !== '') {
      const filtered = shuttles.filter((shuttle) => shuttle.Route === selectedRoute);
      setFilteredShuttles(filtered);
    } else {
      setFilteredShuttles(shuttles);
    }
  }, [selectedRoute, shuttles]);

  const handleSearch = () => {
    const filtered = shuttles.filter((shuttle) =>
      shuttle.Route.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredShuttles(filtered);
  };

  const handleEditShuttle = (shuttle) => {
    setIsEditing(true);
    setEditedShuttle(shuttle);
    setEditedShuttleId(shuttle._id);
  };

  const handleSaveShuttle = () => {
    // Validation
    const errors = {};
    if (!editedShuttle.VehicleNumber.trim()) {
      errors.vehicleNumber = 'Vehicle number is required';
    }
    if (!editedShuttle.Route.trim()) {
      errors.route = 'Route is required';
    }
    if (!editedShuttle.VehicleType.trim()) {
      errors.vehicleType = 'Vehicle type is required';
    }
    if (!editedShuttle.DriverName.trim()) {
      errors.driverName = 'Driver name is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    axios
      .put(`http://localhost:8070/shuttle/shuttles/${editedShuttleId}`, editedShuttle)
      .then(() => {
        alert('Shuttle updated successfully');
        setIsEditing(false);
        setEditedShuttleId(null);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleDeleteShuttle = (shuttleId) => {
    axios
      .delete(`http://localhost:8070/shuttle/shuttles/${shuttleId}`)
      .then(() => {
        setShuttles((prevShuttles) => prevShuttles.filter((shuttle) => shuttle._id !== shuttleId));
        setFilteredShuttles((prevShuttles) =>
          prevShuttles.filter((shuttle) => shuttle._id !== shuttleId)
        );
        alert('Shuttle deleted successfully');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handlePrint = useReactToPrint ({
    content: () => ComponentsRef.current,
    documentTitle: "Feedbacks",
  });

  return (
    <div className="shuttle-container">
      <h1>All Shuttles</h1>
      <div>
        <TextField
          type="text"
          placeholder="Search Route..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
         <Button variant="contained" onClick={handleSearch}>Search</Button>
      </div>
      {/* Filter buttons */}
      <div className="route-filter">
        <Button variant="contained" onClick={() => setSelectedRoute('')}>All Routes</Button>
        {Array.from(new Set(shuttles.map((shuttle) => shuttle.Route))).map((route, index) => (
          <Button key={index} variant="contained" onClick={() => setSelectedRoute(route)}>
            {route}
          </Button>
        ))}
        <Button onClick={handlePrint}>Print</Button>
      </div>
      <TableContainer component={Paper} ref={ComponentsRef}>
        <Table sx={{ minWidth: 650 }} aria-label="shuttle table">
          <TableHead>
            <TableRow>
              <TableCell>Vehicle Number</TableCell>
              <TableCell>Route</TableCell>
              <TableCell>Vehicle Type</TableCell>
              <TableCell>Driver Name</TableCell>
              {!isEditing && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredShuttles.map((shuttle) => (
              <TableRow key={shuttle._id} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                <TableCell>
                  {isEditing && editedShuttleId === shuttle._id ? (
                    <TextField
                      type="text"
                      value={editedShuttle.VehicleNumber}
                      error={!!errors.vehicleNumber}
                      helperText={errors.vehicleNumber}
                      onChange={(e) =>
                        setEditedShuttle({ ...editedShuttle, VehicleNumber: e.target.value })
                      }
                    />
                  ) : (
                    shuttle.VehicleNumber
                  )}
                </TableCell>
                <TableCell>
                  {isEditing && editedShuttleId === shuttle._id ? (
                    <TextField
                      type="text"
                      value={editedShuttle.Route}
                      error={!!errors.route}
                      helperText={errors.route}
                      onChange={(e) =>
                        setEditedShuttle({ ...editedShuttle, Route: e.target.value })
                      }
                    />
                  ) : (
                    shuttle.Route
                  )}
                </TableCell>
                <TableCell>
                  {isEditing && editedShuttleId === shuttle._id ? (
                    <TextField
                      type="text"
                      value={editedShuttle.VehicleType}
                      error={!!errors.vehicleType}
                      helperText={errors.vehicleType}
                      onChange={(e) =>
                        setEditedShuttle({ ...editedShuttle, VehicleType: e.target.value })
                      }
                    />
                  ) : (
                    shuttle.VehicleType
                  )}
                </TableCell>
                <TableCell>
                  {isEditing && editedShuttleId === shuttle._id ? (
                    <TextField
                      type="text"
                      value={editedShuttle.DriverName}
                      error={!!errors.driverName}
                      helperText={errors.driverName}
                      onChange={(e) =>
                        setEditedShuttle({ ...editedShuttle, DriverName: e.target.value })
                      }
                    />
                  ) : (
                    shuttle.DriverName
                  )}
                </TableCell>
                {!isEditing ? (
                  <TableCell>
                    <Button onClick={() => handleEditShuttle(shuttle)}>Edit</Button>
                    <Button onClick={() => handleDeleteShuttle(shuttle._id)}>Delete</Button>
                  </TableCell>
                ) : (
                  <TableCell>
                    <Button onClick={handleSaveShuttle}>Update</Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AllShuttle;
