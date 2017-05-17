import React from 'react';
import PropTypes from 'prop-types';
import iconTypes from './icons.json';

const Icon = ({ icon }) => <i className={`ts-icon-${icon}`} />;

Icon.propTypes = {
	icon: PropTypes.oneOf(iconTypes).isRequired
};
Icon.iconTypes = iconTypes;

export default Icon;
