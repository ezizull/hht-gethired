import { Card } from '@/presentation/components/shadcn/card';
import { initFunc } from './functions';
import FormWidget from './widgets/form';
import { Avatar, AvatarFallback, AvatarImage } from '@/presentation/components/shadcn/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/presentation/components/shadcn/dropdown-menu';
import { getLogout } from '@/infrastructure/actions/auth/logout';
import { page } from '@/presentation/routes/names';

export default function HomePage() {
  const { navigate, dispatch, userData } = initFunc();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen  p-4'>
      <div className="flex flex-col-reverse xl:flex-row space-y-reverse space-y-6 xl:space-y-0 space-x-0 xl:space-x-4">
        <div className="flex flex-col space-y-4">
          {/* Logout */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Card className='flex justify-between 2xs:w-96 p-6 py-8 font-lato'>
                <section className='flex flex-col'>
                  <h1 className='font-extrabold text-xl'>{userData?.name}</h1>
                  <h2 className='font-light'>{userData?.email}</h2>
                </section>

                <Avatar className='hidden 2xs:flex size-14'>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>{userData?.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
              </Card>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='flex w-96'>
              <DropdownMenuItem
                key="logout"
                className='w-full'
                onClick={function async() {
                  dispatch(getLogout());
                  navigate(page.login);
                }}
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Form */}
          <FormWidget />
        </div>
      </div>
    </div>
  );
}

