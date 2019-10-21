import PropTypes from 'prop-types';
import React from 'react';

const Buttons = ({ children, ...props }) => {
	return (
		<menu data-ts="Buttons" {...props}>
			{React.Children.map(children, child =>
				React.isValidElement(child) ? <li>{child}</li> : null
			)}
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
