import { Routes, Route } from 'react-router-dom';
import { page } from './names';
import ProductPage from '../pages/product';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/404';


export function UserRoutes() {
  return (
    <Routes>
      {/* Product */}
      <Route path={page.home} element={<HomePage />} />
      <Route path={page.product} element={<ProductPage />} />

      {/* Not Found */}
      <Route path={page.notfound} element={<NotFoundPage />} />
    </Routes>
  );
}