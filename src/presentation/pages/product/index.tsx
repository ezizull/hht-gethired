import { initFunc } from './functions';


export default function ProductPage() {
  const { navigate } = initFunc();

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='font-xl text-center font-bold'>
        Product Page
      </p>
    </div>
  );
}

