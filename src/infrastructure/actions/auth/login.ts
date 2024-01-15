import { ConstRequest } from "@/utils/constants/request.consts";
import { RequestAction } from "@/utils/infrastructure/actions/request.actions";
import { ProfileData } from "@/infrastructure/models/user/profile.model";
import { AsyncAction, Dispatch } from "..";
import * as fs from 'fs';


export const loginActions = RequestAction<ProfileData>(ConstRequest.login.data);
export function getLogin(): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(loginActions.loading);

      const responJSON = fs.readFileSync("login.json");
      console.log(responJSON);
      // const response = JSON.parse(responJSON);

      // dispatch(loginActions.success.action());
    } catch (error: any) {
      dispatch(loginActions.failure.action(error));
    }
  }
}