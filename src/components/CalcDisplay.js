import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalcDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 'Math error',
    };
  }

  render() {
    const { displayText } = this.state;
    return (
      <div className="calculator-element calculator-display">{displayText}</div>
    );
  }
}
