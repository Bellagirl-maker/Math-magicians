import React from 'react';
import Keys from './Keys';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <div className="display">
      <span>0</span>
    </div>
    <div className="operators">
      <Keys name="AC" />
      <Keys name="+/-" />
      <Keys name="%" />
      <Keys name="÷" kColor="yellow" />
    </div>
    <div className="row">
      <Keys name="7" />
      <Keys name="8" />
      <Keys name="9" />
      <Keys name="x" kColor="yellow" />
    </div>
    <div className="row">
      <Keys name="4" />
      <Keys name="5" />
      <Keys name="6" />
      <Keys name="-" kColor="yellow" />
    </div>
    <div className="row">
      <Keys name="1" />
      <Keys name="2" />
      <Keys name="3" />
      <Keys name="+" kColor="yellow" />
    </div>
    <div className="row">
      <Keys name="0" kColor="zero" />
      <Keys name="." />
      <Keys name="=" kColor="yellow" />
    </div>
  </div>
);

export default Calculator;
