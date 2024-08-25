import React, { useState } from "react";

const AgeCalculator = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    setAge(age);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Age Calculator</h1>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button onClick={calculateAge} style={{ padding: "10px", marginLeft: "10px", fontSize: "16px" }}>
        Calculate Age
      </button>
      {age !== null && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <p>Your age is: <strong>{age}</strong> years</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
