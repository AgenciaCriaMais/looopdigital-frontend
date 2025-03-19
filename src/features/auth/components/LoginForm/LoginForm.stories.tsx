import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

/**
* @author Jean Paul | jeanpaulwebb@gmail.com
* @description Descrição do componente da feature
* @date 18/03/2025
* @class LoginForm
*/
const meta: Meta<typeof LoginForm> = {
    title: 'Components/LoginForm',
    component: LoginForm,
    args: {
        // Propriedades padrão para o componente na story
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
        // Defina ou sobrescreva props específicas para esta Story
    },
};