import { Routes, Route, Navigate } from 'react-router-dom';
import { page } from './names';
import LoginPage from '../pages/login';


export function AuthRoutes() {
    return (
        <Routes>
            {/* Auth */}
            <Route path={page.login} element={<LoginPage />} />
            <Route path={page.notfound} element={<Navigate to={page.login} />} />
        </Routes>
    );
}