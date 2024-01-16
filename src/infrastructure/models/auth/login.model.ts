export interface LoginBody {
    email: string;
    password: string;
}

export const AuthForm = {
    email: "",
    isEmailError: false,
    emailError: "",
    password: "",
    passwordError: "",
    showPassword: false,
    isPasswordError: false,
};