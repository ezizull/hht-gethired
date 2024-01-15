import { formFunc, initFunc } from './functions';


export default function LoginPage() {
  const { navigation } = initFunc();

  return (
    <div className='flex flex-col items-center justify-center'>
      <p className='font-xl text-center font-bold'>
        Login Page
      </p>
    </div>
  );
}

