import { initFunc } from './functions';
import FormWidget from './widgets/form';

export default function HomePage() {
  const { navigate } = initFunc();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen  p-4'>
      <div className="flex flex-col-reverse xl:flex-row space-y-reverse space-y-6 xl:space-y-0 space-x-0 xl:space-x-4">
        <div className="flex flex-col space-y-4">
          <FormWidget />
        </div>
      </div>
    </div>
  );
}

