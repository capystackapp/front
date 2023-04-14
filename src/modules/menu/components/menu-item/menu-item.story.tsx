import { MenuItem } from './menu-item.component';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MenuItem> = {
  title: 'Menu/MenuItem',
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const View: Story = {
  args: {
    imagePath: '/assets/pizza/manhattan.jpeg',
    weight: 555,
    title: 'Pizza Manhattan',
    ingredients: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim?',
    price: 215
  }
};
