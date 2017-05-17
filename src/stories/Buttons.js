import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Button, ButtonGroup } from '../components';

const stories = storiesOf('Buttons', module);

stories.addWithInfo('Button', () => <Button>Hi!</Button>, {
	inline: true
});

stories.addWithInfo(
	'Button groups',
	() => (
		<div>
			<h3>Button group menu</h3>
			<ButtonGroup>
				<Button type="primary">Primary</Button>
				<Button type="secondary">Secondary</Button>
				<Button type="tertiary">Tertiary</Button>
			</ButtonGroup>
			<h3>Button group joined</h3>
			<ButtonGroup join>
				<Button type="primary">Primary</Button>
				<Button type="secondary">Secondary</Button>
				<Button type="tertiary">Tertiary</Button>
			</ButtonGroup>
		</div>
	),
	{
		inline: true
	}
);
