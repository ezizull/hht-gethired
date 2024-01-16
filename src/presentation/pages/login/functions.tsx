
import { useLocation, useNavigate } from "react-router-dom";
import { isEmail } from '../../../utils/variables/strings/email.string';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { getLogin } from "@/infrastructure/actions/auth/login";


export function initFunc() {
  const navigation = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return { navigation, location, dispatch };
}

export function loginFunc(dispatch: any) {
  const defAuthForm = {
    email: "",
    isEmailError: false,
    password: "",
    showPassword: false,
    isPasswordError: false,
  };

  const [authForm, setAuthForm] = useState(defAuthForm);
  function submitForm() {
    setAuthForm({
      ...authForm,
      isEmailError: !isEmail(authForm.email),
      isPasswordError: authForm.password.length <= 3,
    });

    if (!authForm.isEmailError || !authForm.isPasswordError) {
      dispatch(getLogin({
        email: authForm.email,
        password: authForm.password,
      }))
    }
  }

  return { authForm, setAuthForm, submitForm }
}