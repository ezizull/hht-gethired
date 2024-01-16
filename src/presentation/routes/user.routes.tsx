import { Routes, Route, Navigate } from 'react-router-dom';
import { page } from './names';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/404';

export function UserRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path={page.home} element={<HomePage />} />

      {/* Not Found */}
      <Route path={page.login} element={<Navigate replace to={page.home} />} />
      <Route path={page.notfound} element={<NotFoundPage />} />
    </Routes>
  );
}