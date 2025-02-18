import React, { useState, useRef } from 'react';

interface PinInputProps {
  length?: number;
  onComplete: (pin: string) => void;
}

const PinInput = ({ length = 6, onComplete }: PinInputProps) => {
  const [pin, setPin] = useState(Array(length).fill(''));
  const inputs = useRef([]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move focus to the next input
    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    // If the PIN is complete, call onComplete
    if (newPin.every((num) => num !== '')) {
      onComplete(newPin.join(''));
    }
  };

  const handleBackspace = (value: string, index: number) => {
    if (value === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleButtonClick = () => {
    inputs.current[0]?.focus();
  };

  return (
    <div className="flex justify-center gap-2">
      {pin.map((num, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={num}
          ref={(el) => (inputs.current[index] = el)}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => {
            if (e.key === 'Backspace') {
              handleBackspace(e.currentTarget.value, index);
            }
          }}
          className="w-12 h-12 text-xl text-center border rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline"
        />
      ))}
      <button onClick={handleButtonClick} className="hidden">Click to Focus</button>
    </div>
  );
};

export default PinInput;
