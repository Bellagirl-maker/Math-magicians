import React from 'react';
import PropTypes from 'prop-types';

const Keys = ({ name, kColor }) => <div className={`Keys ${kColor}`}>{ name }</div>;
Keys.defaultProps = {
  kColor: '',
};

Keys.propTypes = {
  name: PropTypes.string.isRequired,
  kColor: PropTypes.string,
};
export default Keys;
