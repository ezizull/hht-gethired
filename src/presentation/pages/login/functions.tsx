
import { useLocation, useNavigate } from "react-router-dom";
import { isEmail } from '../../../utils/variables/strings/email.string';
import { useState } from 'react';


export function initFunc() {
  const navigation = useNavigate();
  const location = useLocation();

  return { navigation, location };
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