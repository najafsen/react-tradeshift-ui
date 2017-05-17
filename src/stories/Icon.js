import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Icon } from '../components';

const stories = storiesOf('Icons', module);

stories.addWithInfo('Available icons', () => Icon.iconTypes.map(icon => <Icon icon={icon} />), {
	inline: true
});
