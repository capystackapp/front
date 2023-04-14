import type { Meta, StoryObj } from '@storybook/react';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';
import pizzaMenu from '@app/mocks/pizza.json';


const meta: Meta<typeof MenuList> = {
  title: 'Menu/MenuList',
  component: MenuList,
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const View: Story = {
  args: {
    items: pizzaMenu
  }
};
