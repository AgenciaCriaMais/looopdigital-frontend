import React from 'react';
import styles from './LoginForm.module.css';

/**
* @author Jean Paul | jeanpaulwebb@gmail.com
* @description Descrição do componente da feature
* @date 18/03/2025
* @class LoginForm
*/

interface LoginFormProps {
    name?: string;
    // Adicione outras props, se necessário
}

export function LoginForm(props: LoginFormProps) {
    return (
        <div className={styles.container}>
            <h1>{props.name || 'LoginForm works!'}</h1>
        </div>
    );
}

export default LoginForm;