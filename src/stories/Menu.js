import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { boolean, select } from '@kadira/storybook-addon-knobs';
import { Menu, MenuItem, Icon } from '../components';

const stories = storiesOf('Menu', module);
const iconMap = Icon.iconTypes.reduce((o, icon) => Object.assign(o, { icon }), {});
const iconSelector = (name, defaultValue) => select(name, iconMap, defaultValue);

stories.addWithInfo(
	'Basic usage',
	() => (
		<Menu>
			<MenuItem
				selected={boolean('selected', true)}
				selectedIcon={iconSelector('selectedIcon', 'checked')}
				disabled={boolean('disabled', false)}
				defaultIcon={iconSelector('defaultIcon')}
			>
				Menu item 1
			</MenuItem>
			<MenuItem defaultIcon={iconSelector('defaultIcon')}>
				Menu item 2
			</MenuItem>
			<MenuItem disabled defaultIcon={iconSelector('defaultIcon')}>
				Menu item 2
			</MenuItem>
		</Menu>
	),
	{ inline: true }
);
