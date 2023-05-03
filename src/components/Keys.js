import React from 'react';
import PropTypes from 'prop-types';

const Keys = ({ value, handleBtnClick, kColor }) => <button onClick={handleBtnClick} type="button" className={`Keys ${kColor}`}>{ value }</button>;
Keys.defaultProps = {
  kColor: '',
};

Keys.propTypes = {
  value: PropTypes.string.isRequired,
  kColor: PropTypes.string,
  handleBtnClick: PropTypes.func.isRequired,
};
export default Keys;
