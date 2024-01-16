import { ConstRequest } from "@/utils/constants/request.consts";
import { RequestAction } from "@/utils/infrastructure/actions/request.actions";
import { AsyncAction, Dispatch } from "..";
import { redirect } from "react-router-dom";
import { page } from "@/presentation/routes/names";
import secureLocalStorage from "react-secure-storage";

export const getLogoutAction = RequestAction<null>(ConstRequest.logout.post);
export function getLogout(): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(getLogoutAction.loading);

      secureLocalStorage.removeItem("user")
      dispatch(getLogoutAction.success.action(null));
    } catch (error: any) {
      dispatch(getLogoutAction.failure.action(error));
    }
  }
}