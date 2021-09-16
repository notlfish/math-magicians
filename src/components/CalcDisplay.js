import React from 'react';
import PropTypes from 'prop-types';

const CalcDisplay = (props) => {
  const { displayText } = props;
  return (
    <div className="calculator-element calculator-display">{displayText}</div>
  );
};

CalcDisplay.propTypes = {
  displayText: PropTypes.string.isRequired,
};

export default CalcDisplay;
