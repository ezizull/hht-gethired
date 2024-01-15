import { initFunc } from './functions';


export default function ProductPage() {
  const { navigation } = initFunc();

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='font-xl text-center font-bold'>
        Product Page
      </p>
    </div>
  );
}

