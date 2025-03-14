import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginForm } from './LoginForm';

/**
* @author Jean Paul | jeanpaulwebb@gmail.com
* @class LoginForm
* @description Descrição do componente da feature
* @date 14/03/2025
*/
describe('<LoginForm />', () => {
    it('should render the component name', () => {
        render(<LoginForm name={''}/>);
        expect(screen.getByText(/LoginForm works!/i)).toBeInTheDocument();
    });
});