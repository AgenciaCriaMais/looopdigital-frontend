import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

// Lazy load das páginas de cada feature
const AuthPage = lazy(() => import('./features/auth/pages/AuthPage'));
const HomePage = lazy(() => import('./features/home/pages/HomePage'));

// NotFoundPage é global
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const AppRoutes: React.FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/auth/*" element={<AuthPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;