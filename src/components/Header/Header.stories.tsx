import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const FirstStory: Story = {
  args: {
    left: '왼쪽',
    right: '오른쪽',
  },
};
