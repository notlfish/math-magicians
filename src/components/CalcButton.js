import React from 'react';
import PropTypes from 'prop-types';

const CalcButton = (props) => {
  const { displayText, gridElementClass, handler } = props;
  return (
    <button
      type="button"
      onClick={handler}
      className={`calculator-element calculator-button ${gridElementClass}`}
    >
      {displayText}
    </button>
  );
};

CalcButton.defaultProps = {
  gridElementClass: 'normal-button',
};

CalcButton.propTypes = {
  displayText: PropTypes.string.isRequired,
  gridElementClass: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

export default CalcButton;
