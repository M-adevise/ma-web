import { AuthProps, AuthPage as MUIAuthPage } from '@refinedev/mui';
import * as React from 'react';
import LOGO from '../../assets/logo.png';

const authWrapperProps = {
    style: {
        background: 'radial-gradient(50% 50% at 50% 50%,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 100%)',
        backgroundSize: 'cover',
    },
};

const renderAuthContent = (content: React.ReactNode) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img src={LOGO} alt='logo' style={{ width: '200px' }} />
            <p style={{ color: 'white' }}>Prenez en main votre sante</p>
            {content}
        </div>
    );
};

export const LoginPage: React.FC<AuthProps> = ({ type, formProps }) => {
    return <MUIAuthPage type={type} wrapperProps={authWrapperProps} renderContent={renderAuthContent} formProps={formProps} />;
};