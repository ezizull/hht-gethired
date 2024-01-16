import { Card } from '@/presentation/components/shadcn/card';
import { initFunc } from './functions';


export default function HomePage() {
  const { navigate } = initFunc();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <Card className='2xs:w-96 p-6 py-8 font-lato'>
        <h1 className='text-lg font-bold text-center mb-10'>Product</h1>
      </Card>
    </div>
  );
}

