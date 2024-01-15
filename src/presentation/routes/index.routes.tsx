import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './auth.routes';
import { UserRoutes } from './user.routes';



export function AuthNavigation() {
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    );
}

export function HomeNavigation() {
    return (
        <BrowserRouter>
            <UserRoutes />
        </BrowserRouter>
    );
}
