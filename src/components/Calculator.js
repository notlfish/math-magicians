import React from 'react';
import CalcButton from './CalcButton';
import CalcDisplay from './CalcDisplay';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <CalcDisplay />
        <div className="calculator-buttons-container">
          <CalcButton displayText="AC" />
          <CalcButton displayText="+/-" />
          <CalcButton displayText="%" />
          <CalcButton displayText="÷" gridElementClass="operator-button" />
          <CalcButton displayText="7" />
          <CalcButton displayText="8" />
          <CalcButton displayText="9" />
          <CalcButton displayText="×" gridElementClass="operator-button" />
          <CalcButton displayText="4" />
          <CalcButton displayText="5" />
          <CalcButton displayText="6" />
          <CalcButton displayText="-" gridElementClass="operator-button" />
          <CalcButton displayText="1" />
          <CalcButton displayText="2" />
          <CalcButton displayText="3" />
          <CalcButton displayText="+" gridElementClass="operator-button" />
          <CalcButton displayText="0" gridElementClass="zero-button" />
          <CalcButton displayText="." />
          <CalcButton displayText="=" gridElementClass="operator-button" />
        </div>
      </div>
    );
  }
}
