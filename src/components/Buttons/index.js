import PropTypes from 'prop-types';
import React from 'react';
import ShortID from 'shortid';

const Buttons = ({ children, ...props }) => {
	return (
		<menu data-ts="Buttons" {...props}>
			{children.map(child => (
				<li key={ShortID.generate()}>{child}</li>
			))}
		</menu>
	);
};

Buttons.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

Buttons.defaultProps = {
	children: null
};

export default Buttons;
