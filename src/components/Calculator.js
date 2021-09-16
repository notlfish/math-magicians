import React, { useState } from 'react';
import CalcButton from './CalcButton';
import CalcDisplay from './CalcDisplay';
import calculate from '../logic/calculate';

export default () => {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttonHandler = (e) => {
    const buttonName = e.target.innerHTML;
    setCalculator(calculate(calculator, buttonName));
  };

  const { next, total } = calculator;

  return (
    <div className="calculator">
      <CalcDisplay displayText={next || total} />
      <div className="calculator-buttons-container">
        <CalcButton displayText="AC" handler={buttonHandler} />
        <CalcButton displayText="+/-" handler={buttonHandler} />
        <CalcButton displayText="%" handler={buttonHandler} />
        <CalcButton
          displayText="÷"
          gridElementClass="operator-button"
          handler={buttonHandler}
        />
        <CalcButton displayText="7" handler={buttonHandler} />
        <CalcButton displayText="8" handler={buttonHandler} />
        <CalcButton displayText="9" handler={buttonHandler} />
        <CalcButton
          displayText="×"
          gridElementClass="operator-button"
          handler={buttonHandler}
        />
        <CalcButton displayText="4" handler={buttonHandler} />
        <CalcButton displayText="5" handler={buttonHandler} />
        <CalcButton displayText="6" handler={buttonHandler} />
        <CalcButton
          displayText="-"
          gridElementClass="operator-button"
          handler={buttonHandler}
        />
        <CalcButton displayText="1" handler={buttonHandler} />
        <CalcButton displayText="2" handler={buttonHandler} />
        <CalcButton displayText="3" handler={buttonHandler} />
        <CalcButton
          displayText="+"
          gridElementClass="operator-button"
          handler={buttonHandler}
        />
        <CalcButton
          displayText="0"
          gridElementClass="zero-button"
          handler={buttonHandler}
        />
        <CalcButton displayText="." handler={buttonHandler} />
        <CalcButton
          displayText="="
          gridElementClass="operator-button"
          handler={buttonHandler}
        />
      </div>
    </div>
  );
};
