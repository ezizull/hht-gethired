import { Card } from '@/presentation/components/shadcn/card';
import { loginFunc, initFunc } from './functions';
import { Label } from '@/presentation/components/shadcn/label';
import { Input } from '@/presentation/components/shadcn/input';
import { Button } from '@/presentation/components/shadcn/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Form } from 'react-router-dom';
import { ConstValidation } from '@/utils/constants/validation.consts';
import { isEmail } from '@/utils/variables/strings/email.string';
import { isPassword } from '@/utils/variables/strings/password.string';


export default function LoginPage() {
  const { dispatch } = initFunc();
  const { authForm, setAuthForm, submitForm } = loginFunc(dispatch);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <Card className='2xs:w-96 p-6 py-8 font-lato'>
        <h1 className='text-lg font-bold text-center mb-10'>Form Login</h1>

        <form onSubmit={(event) => submitForm(event)}>
          {/* Email */}
          <section className='space-y-1 mb-4'>
            <Label htmlFor='email'>Email</Label>
            <Input
              required
              id='email'
              placeholder='example@email.com'
              onChange={function (event) {
                return setAuthForm({
                  ...authForm,
                  email: event.target.value,
                  isEmailError: !isEmail(event.target.value),
                  emailError: !isEmail(event.target.value) ? ConstValidation.email.error : "",
                });
              }}
            />
            {
              authForm.isEmailError &&
              <span className='text-sm text-red-400'>
                {authForm.emailError}
              </span>
            }
          </section>

          {/* Password */}
          <section className='space-y-1 mb-8'>
            <Label htmlFor='password'>Password</Label>
            <section className='flex relative items-center'>
              <Input
                required
                id='password'
                type={authForm.showPassword ? 'text' : 'password'}
                placeholder='password'
                onChange={function (event) {
                  return setAuthForm({
                    ...authForm,
                    password: event.target.value,
                    isPasswordError: !isPassword(event.target.value),
                    passwordError: !isPassword(event.target.value) ? ConstValidation.password.error : "",
                  });
                }}
              />
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
            {
              authForm.isPasswordError &&
              <span className='text-sm text-red-400'>
                {authForm.passwordError}
              </span>
            }
          </section>

          {/* Submit */}
          <Button
            type="submit"
            className='w-full'
            size="sm"
            onClick={() => submitForm()}>
            Login
          </Button>
        </form>

      </Card>
    </div>
  );
}

