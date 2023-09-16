// SquareCalculator.js
import React, { useMemo } from 'react';

function SquareCalculator({ number }) {
  const squaredValue = useMemo(() => {
    console.log('Calculating square...');
    if (typeof number === 'number') {
      return number * number;
    } else {
      return 0; // Default value or error handling
    }
  }, [number]);

  return (
    <div>
      <p>Number: {number}</p>
      <p>Square: {squaredValue}</p>
    </div>
  );
}

export default SquareCalculator;
