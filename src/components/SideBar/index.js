import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

const noop = () => {};

class SideBar extends Component {
	static wrapContent(nodes) {
		const children = React.Children.toArray(nodes);
		const wrappedTabs = children.every(node => node.props['data-ts'] === 'Panel');
		return nodes && wrappedTabs ? nodes : <div data-ts="Panel">{nodes}</div>;
	}

	constructor(props) {
		super(props);
		this.onRef = this.onRef.bind(this);
		this.onOpen = this.onOpen.bind(this);
		this.onClose = this.onClose.bind(this);

		// Sync open flag for onclose / onopen callbacks
		this.isOpen = props.isOpen;
	}

	componentWillReceiveProps(nextProps) {
		this.isOpen = nextProps.isOpen;
	}

	onClose(e) {
		this.props.onClose(e);
		return typeof this.isOpen !== 'undefined' ? !this.isOpen : undefined;
	}

	onOpen(e) {
		this.props.onOpen(e);
		return this.isOpen;
	}

	onRef(ref) {
		if (!ref) {
			return;
		}

		window.ts.ui.get(ref, spirit => {
			spirit.onclose = this.onClose;
			spirit.onclosed = this.props.onClosed;
			spirit.onopen = this.onOpen;
			spirit.onopened = this.props.onOpened;
		});
	}

	render() {
		const { isLoading, loadingMessage, title, isOpen, className } = this.props;
		const busyMessage = isLoading ? loadingMessage : undefined;
		const asideProps = {
			'data-ts.title': title,
			'data-ts.open': isOpen,
			'data-ts.busy': busyMessage
		};

		if (className) {
			asideProps.className = className;
		}

		const content = SideBar.wrapContent(this.props.children);
		return (
			<Portal>
				<aside data-ts="SideBar" {...asideProps} ref={this.onRef}>
					{content}
				</aside>
			</Portal>
		);
	}
}

SideBar.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	isLoading: PropTypes.bool,
	isOpen: PropTypes.bool,
	loadingMessage: PropTypes.string,
	onClose: PropTypes.func,
	onClosed: PropTypes.func,
	onOpen: PropTypes.func,
	onOpened: PropTypes.func,
	title: PropTypes.string,
	className: PropTypes.string
};

SideBar.defaultProps = {
	children: null,
	isLoading: false,
	isOpen: undefined,
	loadingMessage: 'Loading...',
	onClose: noop,
	onClosed: noop,
	onOpen: noop,
	onOpened: noop,
	title: 'SideBar',
	className: ''
};

export default SideBar;
