import { ConstRequest } from "@/utils/constants/request.consts";
import { RequestAction } from "@/utils/infrastructure/actions/request.actions";
import { ProfileData } from "@/infrastructure/models/user/profile.model";
import { LoginBody } from "@/infrastructure/models/auth/login.model";
import { AsyncAction, Dispatch } from "..";
import secureLocalStorage from "react-secure-storage";


export const getLoginAction = RequestAction<ProfileData>(ConstRequest.login.data);
export function getLogin(form: LoginBody): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(getLoginAction.loading);
      await secureLocalStorage.setItem("user", {
        email: form.email,
        name: "username",
      });
      const response = await secureLocalStorage.getItem("user") as ProfileData;
      dispatch(getLoginAction.success.action(response));
    } catch (error: any) {
      dispatch(getLoginAction.failure.action(error));
    }
  }
}

