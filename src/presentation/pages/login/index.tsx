import { Card } from '@/presentation/components/shadcn/card';
import { loginFunc, initFunc } from './functions';
import { Label } from '@/presentation/components/shadcn/label';
import { Input } from '@/presentation/components/shadcn/input';
import { Button } from '@/presentation/components/shadcn/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';


export default function LoginPage() {
  const { navigation, dispatch } = initFunc();
  const { authForm, setAuthForm } = loginFunc(dispatch);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <Card className='2xs:w-96 p-6 py-8'>
        <h1 className='text-lg text-center mb-10'>Sign In</h1>

        <section className='space-y-1 mb-4'>
          <Label htmlFor='email'>Email</Label>
          <Input id='email' required placeholder='example@email.com' />
        </section>

        <section className='space-y-1 mb-8'>
          <Label htmlFor='password'>Password</Label>

          <section className='flex relative items-center'>
            <Input id='password' type={authForm.showPassword ? 'text' : 'password'} required placeholder='password' />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => setAuthForm({ ...authForm, showPassword: !authForm.showPassword })}
              className="absolute h-full right-0">
              {
                authForm.showPassword ?
                  <EyeIcon
                    className="size-4"
                    aria-hidden="true"
                  />
                  :
                  <EyeOffIcon
                    className="size-4"
                    aria-hidden="true"
                  />
              }
            </Button>
          </section>
        </section>

        <Button
          type="button"
          className='w-full'
          size="sm"
        >
          Login
        </Button>
      </Card>
    </div>
  );
}

