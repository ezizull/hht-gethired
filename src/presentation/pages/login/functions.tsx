
import { useLocation, useNavigate } from "react-router-dom";
import { isEmail } from '../../../utils/variables/strings/email.string';
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { getLogin } from "@/infrastructure/actions/auth/login";
import { isPassword } from "@/utils/variables/strings/password.string";
import { ConstMessage } from "@/utils/constants/message.consts";
import { FormEvent } from "@/infrastructure/models/app/event";
import { AuthForm } from "@/infrastructure/models/auth/login.model";


export function initFunc() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return { navigate, location, dispatch };
}

export function loginFunc(dispatch: any) {
  const [authForm, setAuthForm] = useState(AuthForm);
  function submitForm(event?: FormEvent) {
    event?.preventDefault();

    setAuthForm({
      ...authForm,
      isEmailError: !isEmail(authForm.email),
      emailError: !isEmail(authForm.email) ? ConstMessage.email.error : "",
      isPasswordError: !isPassword(authForm.password),
      passwordError: !isPassword(authForm.password) ? ConstMessage.password.error : "",
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