import { productFunc } from './functions';
import ProfileWidget from './widgets/profile.';
import FormWidget from './widgets/form';
import ProductWidget from './widgets/products.';

export default function HomePage() {
  const { product, setProduct, submitProduct, deleteProduct, updateProduct, products } = productFunc();

  return (
    <div className='flex flex-col min-h-screen justify-center items-center xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-4 p-4'>
      <div className="flex flex-col space-y-4 w-full 2xs:w-96">
        {/* Logout */}
        <ProfileWidget />

        {/* Form */}
        <FormWidget product={product} setProduct={setProduct} submitProduct={submitProduct} />
      </div>

      {/* Products */}
      <ProductWidget products={products} deleteProduct={deleteProduct} updateProduct={updateProduct} />
    </div>
  );
}

