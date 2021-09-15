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
    const { handler } = this.props;
    return (
      <button
        type="button"
        onClick={handler(displayText)}
        className={`calculator-element calculator-button ${gridElementClass}`}
      >
        {displayText}
      </button>
    );
  }
}

CalcButton.defaultProps = {
  gridElementClass: 'normal-button',
};

CalcButton.propTypes = {
  displayText: PropTypes.string.isRequired,
  gridElementClass: PropTypes.string,
  handler: PropTypes.func.isRequired,
};
