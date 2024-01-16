import { ConstRequest } from "@/utils/constants/request.consts";
import { RequestAction } from "@/utils/infrastructure/actions/request.actions";
import { ProfileData } from "@/infrastructure/models/user/profile.model";
import { AsyncAction, Dispatch } from "..";
import * as fs from 'fs';
import { LoginBody } from "@/infrastructure/models/auth/login.model";


export const getLoginAction = RequestAction<ProfileData>(ConstRequest.login.data);
export function getLogin(form: LoginBody): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(getLoginAction.loading);

      const responJSON = fs.readFileSync("login.json");
      console.log(responJSON);
      // const response = JSON.parse(responJSON);

      // dispatch(getLoginAction.success.action());
    } catch (error: any) {
      dispatch(getLoginAction.failure.action(error));
    }
  }
}

export const getLogoutAction = RequestAction<ProfileData>(ConstRequest.logout.post);
export function getLogout(form: LoginBody): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(getLogoutAction.loading);

      // dispatch(getLogoutAction.success.action());
    } catch (error: any) {
      dispatch(getLogoutAction.failure.action(error));
    }
  }
}