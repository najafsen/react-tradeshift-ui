import { storiesOf } from '@storybook/react';
import React from 'react';
import { Buttons } from '../components';

const stories = storiesOf('Buttons', module);

stories.add(
	'Basic structure',
	() => (
		<Buttons>
			<button type="button">
				<span>Button One</span>
			</button>
			<button type="button">
				<span>Button Two</span>
			</button>
		</Buttons>
	),
	{
		info: `The basic structure`
	}
);

stories.add(
	'Joined buttons',
	() => (
		<Buttons className="ts-t-t ts-join">
			<button type="button">
				<span>Button One</span>
			</button>
			<button type="button">
				<span>Button Two</span>
			</button>
		</Buttons>
	),
	{
		info:
			'Buttons component accepts attributes describes in `tradeshift-ui buttons` documentation page'
	}
);
