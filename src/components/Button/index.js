import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';

const Button = ({ children, className, icon, busy, micro, type, ...props }) => (
	<button
		data-ts="button"
		{...{ 'data-ts.busy': busy }}
		className={cx('ts-button', { 'ts-micro': micro, [`ts-${type}`]: type }, className)}
		{...props}
	>
		<span>{children}</span>
		{icon ? <Icon icon={icon} /> : null}
	</button>
);

Button.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	className: PropTypes.string,
	type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
	icon: PropTypes.oneOf(Icon.iconTypes),
	busy: PropTypes.bool,
	micro: PropTypes.bool
};

Button.defaultProps = {
	children: null,
	className: '',
	type: null,
	icon: null,
	busy: false,
	micro: false
};

export default Button;
