import { initFunc } from './functions';
import ProfileWidget from './widgets/profile.';
import FormWidget from './widgets/form';
import ProductWidget from './widgets/products.';

export default function HomePage() {
  const { navigate } = initFunc();


  return (
    <div className='flex flex-col min-h-screen justify-center items-center xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-4 p-4'>
      <div className="flex flex-col space-y-4">
        {/* Logout */}
        <ProfileWidget />

        {/* Form */}
        <FormWidget />
      </div>

      {/* Products */}
      <ProductWidget />
    </div>
  );
}

