import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InputEmail, InputEmailProps } from './InputEmail';

export default {
  title: 'Core/EmailInput',
  component: InputEmail,
  argTypes: {
    bgColor: { control: 'color' },
  },
} as Meta;

const Template: Story<InputEmailProps> = (args) => <InputEmail {...args} />;

export const Red = Template.bind({});
Red.args = {
  bgColor: 'red',
};
