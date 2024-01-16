import { Card } from '@/presentation/components/shadcn/card';
import { initFunc, productFunc } from './functions';


export default function HomePage() {
  const { navigate } = initFunc();
  const { } = productFunc();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <div className="flex flex-col-reverse xl:flex-row space-y-reverse space-y-6 xl:space-y-0 space-x-0 xl:space-x-4">
        <div className="flex flex-col space-y-4">
          <Card className='2xs:w-96 p-6 py-8 font-lato'>
            <h1 className='text-lg font-bold text-center mb-10'>Product</h1>
          </Card>
        </div>
      </div>
    </div>
  );
}

