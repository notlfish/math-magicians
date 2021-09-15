import React from 'react';
import CalcButton from './CalcButton';
import CalcDisplay from './CalcDisplay';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculator: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(buttonName) {
    return () => {
      this.setState((state) => ({
        calculator: calculate(state.calculator, buttonName),
      }));
    };
  }

  render() {
    const {
      calculator: { next, total },
    } = this.state;
    return (
      <div className="calculator">
        <CalcDisplay displayText={next || total} />
        <div className="calculator-buttons-container">
          <CalcButton displayText="AC" handler={this.buttonHandler} />
          <CalcButton displayText="+/-" handler={this.buttonHandler} />
          <CalcButton displayText="%" handler={this.buttonHandler} />
          <CalcButton
            displayText="÷"
            gridElementClass="operator-button"
            handler={this.buttonHandler}
          />
          <CalcButton displayText="7" handler={this.buttonHandler} />
          <CalcButton displayText="8" handler={this.buttonHandler} />
          <CalcButton displayText="9" handler={this.buttonHandler} />
          <CalcButton
            displayText="×"
            gridElementClass="operator-button"
            handler={this.buttonHandler}
          />
          <CalcButton displayText="4" handler={this.buttonHandler} />
          <CalcButton displayText="5" handler={this.buttonHandler} />
          <CalcButton displayText="6" handler={this.buttonHandler} />
          <CalcButton
            displayText="-"
            gridElementClass="operator-button"
            handler={this.buttonHandler}
          />
          <CalcButton displayText="1" handler={this.buttonHandler} />
          <CalcButton displayText="2" handler={this.buttonHandler} />
          <CalcButton displayText="3" handler={this.buttonHandler} />
          <CalcButton
            displayText="+"
            gridElementClass="operator-button"
            handler={this.buttonHandler}
          />
          <CalcButton
            displayText="0"
            gridElementClass="zero-button"
            handler={this.buttonHandler}
          />
          <CalcButton displayText="." handler={this.buttonHandler} />
          <CalcButton
            displayText="="
            gridElementClass="operator-button"
            handler={this.buttonHandler}
          />
        </div>
      </div>
    );
  }
}
