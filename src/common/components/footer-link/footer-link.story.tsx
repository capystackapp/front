import type { Meta, StoryObj } from '@storybook/react';
import { FooterLink as Link } from './footer-link.component';

const FooterLink = (args: any) => <ul><Link {...args} /></ul>


const meta: Meta<typeof FooterLink> = {
  title: 'Common/FooterLink',
  component: FooterLink,
};

export default meta;
type Story = StoryObj<typeof FooterLink>;

export const View: Story = {
    args: {
        href: 'tel:+380441234567',
        children: '044 123 45 67'
    }
};
