import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import src from './dfYOnVk2veA.jpeg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src,
    size: 150,
};
