import { Card } from '@/presentation/components/shadcn/card';
import { initFunc } from './functions';
import FormWidget from './widgets/form';
import { Avatar, AvatarFallback, AvatarImage } from '@/presentation/components/shadcn/avatar';

export default function HomePage() {
  const { navigate, userData } = initFunc();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen  p-4'>
      <div className="flex flex-col-reverse xl:flex-row space-y-reverse space-y-6 xl:space-y-0 space-x-0 xl:space-x-4">
        <div className="flex flex-col space-y-4">
          {/* Logout */}
          <Card className='flex justify-between 2xs:w-96 p-6 py-8 font-lato'>
            <section className='flex flex-col'>
              <h1 className='font-bold text-xl'>{userData.name}</h1>
              <h2 className='font-light'>{userData.email}</h2>
            </section>

            <Avatar className='size-14'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Card>

          {/* Form */}
          <FormWidget />
        </div>
      </div>
    </div>
  );
}

