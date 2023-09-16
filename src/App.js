import React, { useState, useEffect } from 'react';

function SquareRootCalculator() {
  const [number, setNumber] = useState('');
  const [square, setSquare] = useState(null);
  const [squareRoot, setSquareRoot] = useState(null);

  useEffect(() => {
    const parsedNumber = parseFloat(number);

    if (!isNaN(parsedNumber)) {
      setSquare(parsedNumber * parsedNumber);
      if (parsedNumber >= 0) {
        setSquareRoot(Math.sqrt(parsedNumber));
      } else {
        setSquareRoot(null);
      }
    } else {
      setSquare(null);
      setSquareRoot(null);
    }
  }, [number]);

  return (
    <div>
      <h1>Square and Square Root Calculator</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {square !== null && (
        <p>
          Square of {number} is {square.toFixed(2)}
        </p>
      )}
      {squareRoot !== null && (
        <p>
          Square Root of {number} is {squareRoot.toFixed(2)}
        </p>
      )}
      {isNaN(number) && (
        <p>Invalid input. Please enter a valid number.</p>
      )}
    </div>
  );
}

export default SquareRootCalculator;
