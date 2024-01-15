import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { isEmail } from '../../../utils/variables/strings/email.string';

export function initFunc() {
  const navigation = useNavigation<any>();
  return { navigation };
}

export function formFunc() {
  const defAuthForm = {
    email: "",
    isEmailError: false,
    password: "",
    securePassword: true,
    isPasswordError: false,
  };

  const [authForm, setAuthForm] = useState(defAuthForm);
  function camSubmitForm(): boolean {
    setAuthForm({
      ...authForm,
      isEmailError: !isEmail(authForm.email),
      isPasswordError: authForm.password.length <= 3,
    });
    return authForm.isEmailError && authForm.isPasswordError;
  }

  return { authForm, setAuthForm, camSubmitForm }
}