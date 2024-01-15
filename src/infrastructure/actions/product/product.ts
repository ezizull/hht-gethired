import { ConstRequest } from "@/utils/constants/request.consts";
import { RequestAction } from "@/utils/infrastructure/actions/request.actions";
import { ProfileData } from "@/infrastructure/models/user/profile.model";
import { AsyncAction, Dispatch } from "..";
import * as fs from 'fs';
import { LoginBody } from "@/infrastructure/models/auth/login.model";


export const loginActions = RequestAction<ProfileData>(ConstRequest.login.data);
export function getProducts(form: LoginBody): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(loginActions.loading);

      const responJSON = fs.readFileSync("product.json");
      console.log(responJSON);
      // const response = JSON.parse(responJSON);

      // dispatch(loginActions.success.action());
    } catch (error: any) {
      dispatch(loginActions.failure.action(error));
    }
  }
}