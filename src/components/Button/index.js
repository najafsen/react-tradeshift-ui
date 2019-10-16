import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ children, busy, type, ...props }) => {
	const buttonProps = { ...props, 'data-ts.busy': busy };

	// @See https://github.com/yannickcr/eslint-plugin-react/issues/1555
	/* eslint-disable react/button-has-type */
	return (
		<button data-ts="Button" type={type} {...buttonProps}>
			{children}
		</button>
	);
	/* eslint-enable react/button-has-type */
};

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	busy: PropTypes.bool,
	type: PropTypes.string
};

Button.defaultProps = {
	children: null,
	busy: false,
	type: 'button'
};

export default Button;
