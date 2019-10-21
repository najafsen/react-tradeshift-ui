import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Buttons from '.';

configure({ adapter: new Adapter() });

describe('Buttons', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Buttons>
				<button type="button">
					<span>Button One</span>
				</button>
				<button type="button">
					<span>Button Two</span>
				</button>
			</Buttons>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
