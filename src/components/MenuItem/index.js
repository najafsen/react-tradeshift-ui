import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Icon from '../Icon';

const MenuItem = ({ children, selected, disabled, defaultIcon, selectedIcon }) => {
	const iconElm = defaultIcon ? <Icon icon={defaultIcon} /> : null;
	const selectedIconElm = selectedIcon ? <Icon icon={selectedIcon} /> : null;

	return (
		<li className={cx({ 'ts-checked': selected })}>
			<button disabled={disabled}>
				<span>{children}</span>
				{selected ? selectedIconElm : iconElm}
			</button>
		</li>
	);
};

MenuItem.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	selected: PropTypes.bool,
	disabled: PropTypes.bool,
	defaultIcon: Icon.propTypes.icon,
	selectedIcon: Icon.propTypes.icon
};

MenuItem.defaultProps = {
	children: null,
	selected: false,
	disabled: false,
	defaultIcon: undefined,
	selectedIcon: 'checked'
};

export default MenuItem;
