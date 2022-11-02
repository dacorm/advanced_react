import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TextTheme } from 'shared/ui/Text/Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Lorem',
    text: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Magni, odit?`,
};

export const OnlyTitle = Template.bind({});
Primary.args = {
    title: 'Lorem',
};

export const OnlyText = Template.bind({});
Primary.args = {
    text: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Magni, odit?`,
};

export const OnlyTextError = Template.bind({});
Primary.args = {
    text: `Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Magni, odit?`,
    theme: TextTheme.ERROR,
};
