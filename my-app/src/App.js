import React, { useState } from "react";
import "./App.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (event) => {
    const input = event.target.value.replace(/\D/g, "").substring(0, 10); // Remove non-digit characters and limit to 10 digits
    const areaCode = input.substring(0, 3);
    const middlePart = input.substring(3, 6);
    const lastPart = input.substring(6, 10);

    let formattedPhoneNumber = "";

    if (input.length > 6) {
      formattedPhoneNumber = `(${areaCode}) ${middlePart}-${lastPart}`;
    } else if (input.length > 3) {
      formattedPhoneNumber = `(${areaCode}) ${middlePart}`;
    } else if (input.length > 0) {
      formattedPhoneNumber = `${areaCode}`;
    }

    setPhoneNumber(formattedPhoneNumber);
  };

  return (
    <div className="App">
      <input
        type="tel"
        value={phoneNumber}
        onChange={formatPhoneNumber}
        maxLength="16"
        placeholder="(123) 456-7890"
      />
    </div>
  );
}

export default App;
