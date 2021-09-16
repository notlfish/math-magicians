import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalcDisplay extends React.Component {
  render() {
    const { displayText } = this.props;
    return (
      <div className="calculator-element calculator-display">{displayText}</div>
    );
  }
}

CalcDisplay.propTypes = {
  displayText: PropTypes.string.isRequired,
};
