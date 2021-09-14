import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: props.displayText,
      gridElementClass: props.gridElementClass,
    };
  }

  render() {
    const { displayText, gridElementClass } = this.state;
    return (
      <div
        className={`calculator-element calculator-button ${gridElementClass}`}
      >
        {displayText}
      </div>
    );
  }
}

CalcButton.defaultProps = {
  gridElementClass: 'normal-button',
};

CalcButton.propTypes = {
  displayText: PropTypes.string.isRequired,
  gridElementClass: PropTypes.string,
};
