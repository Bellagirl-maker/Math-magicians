import React, { useState } from 'react';
import Keys from './Keys';
import './Calculator.css';
import calculate from '../logic/calculate';
// import { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (button) => {
    setResult(calculate(result, button));
  };

  const calcBoard = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="calculator">
      <div className="display">
        <span>
          {result?.total}
          {' '}
          {result?.operation}
          {' '}
          {result?.next}
        </span>
      </div>

      {
      calcBoard.map((row) => (
        <div key={`line${row[0]}`} className="row">
          {row.map((button) => (
            <Keys
              Key={button}
              value={button}
              handleBtnClick={() => handleClick(button)}
              kColor={button === '0' ? 'zero' : ''}
            />
          ))}
        </div>
      ))
    }
    </div>
  );
};
export default Calculator;
