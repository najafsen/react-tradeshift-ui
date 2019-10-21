import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Buttons from '.';

configure({ adapter: new Adapter() });

describe('Buttons', () => {
	it('should render correctly', () => {
		const wrapper = shallow(
			<Buttons>
				<li>
					<button type="button">
						<span>Button One</span>
					</button>
				</li>
				<li>
					<button type="button">
						<span>Button Two</span>
					</button>
				</li>
			</Buttons>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
