import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ButtonGroup = ({ children, join }) => (
	<menu data-ts="buttons" className={cx('ts-buttons', { 'ts-join': join })}>
		{React.Children.map(children, child => <li>{child}</li>)}
	</menu>
);

ButtonGroup.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	join: PropTypes.bool
};

ButtonGroup.defaultProps = {
	children: null,
	join: false
};

export default ButtonGroup;
