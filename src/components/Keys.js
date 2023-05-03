import React from 'react';
import PropTypes from 'prop-types';

const Keys = ({ name, clickHandle, kColor }) => <button onClick={clickHandle} type="button" className={`Keys ${kColor}`}>{ name }</button>;
Keys.defaultProps = {
  kColor: '',
};

Keys.propTypes = {
  name: PropTypes.string.isRequired,
  kColor: PropTypes.string,
  clickHandle: PropTypes.func.isRequired,
};
export default Keys;
