import { initFunc } from './functions';


export default function NotFoundPage() {
  const { navigate } = initFunc();

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='font-xl text-center font-bold'>
        Notfound Page
      </p>
    </div>
  );
}

