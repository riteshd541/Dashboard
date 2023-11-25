import React, { useState } from "react";
import "./Form.css";

const Forms = () => {
  const [formData, setFormData] = useState({
    venueName: "",
    numOfSeats: "",
    estimatedCrowdSize: "",
    entryPoint: "",
    entryPersonnels: "",
    entryDetectors: "",
    exitPoint: "",
    exitPersonnels: "",
    exitDetectors: "",
    fireExit: "",
    numOfAmbulances: "",
    controlRoomPersonnel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBack = () => {
    // Add logic for going back
    console.log("Back button clicked");
  };

  const handleNext = () => {
    // Add logic for going to the next step
    console.log("Next button clicked");
  };

  return (
    <div>
      <div className="app-container">
        <div className="form-container">
          <div className="form-row">
            <div className="form-field">
              <label>Venue Name:</label>
              <input
                type="text"
                name="venueName"
                value={formData.venueName}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>No of Seats:</label>
              <input
                type="text"
                name="numOfSeats"
                value={formData.numOfSeats}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>Estimated Crowd Size:</label>
              <input
                type="text"
                name="estimatedCrowdSize"
                value={formData.estimatedCrowdSize}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Entry Point:</label>
              <input
                type="text"
                name="entryPoint"
                value={formData.entryPoint}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>No of Personnels:</label>
              <input
                type="text"
                name="entryPersonnels"
                value={formData.entryPersonnels}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>No of Metal Detectors:</label>
              <input
                type="text"
                name="entryDetectors"
                value={formData.entryDetectors}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Exit Point:</label>
              <input
                type="text"
                name="exitPoint"
                value={formData.exitPoint}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>No of Personnels:</label>
              <input
                type="text"
                name="exitPersonnels"
                value={formData.exitPersonnels}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>No of Metal Detectors:</label>
              <input
                type="text"
                name="exitDetectors"
                value={formData.exitDetectors}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Fire Exit:</label>
              <input
                type="text"
                name="fireExit"
                value={formData.fireExit}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>No of Ambulance:</label>
              <input
                type="text"
                name="numOfAmbulances"
                value={formData.numOfAmbulances}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label>No for Control Room:</label>
              <input
                type="text"
                name="controlRoomPersonnel"
                value={formData.controlRoomPersonnel}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Add the Back and Next buttons */}
          <div className="button-container">
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
