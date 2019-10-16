import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ShortID from 'shortid';
import Buttons from '.';

configure({ adapter: new Adapter() });

describe('Buttons', () => {
	beforeEach(() => {
		jest
			.spyOn(ShortID, 'generate')
			.mockReturnValueOnce('short_id_1')
			.mockReturnValueOnce('short_id_2')
			.mockReturnValueOnce('short_id_3')
			.mockReturnValueOnce('short_id_4');
	});

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
