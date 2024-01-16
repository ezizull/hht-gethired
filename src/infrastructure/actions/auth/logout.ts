import { ConstRequest } from "@/utils/constants/request.consts";
import { RequestAction } from "@/utils/infrastructure/actions/request.actions";
import { AsyncAction, Dispatch } from "..";

export const getLogoutAction = RequestAction<null>(ConstRequest.logout.post);
export function getLogout(): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(getLogoutAction.loading);

      // dispatch(getLogoutAction.success.action());
    } catch (error: any) {
      dispatch(getLogoutAction.failure.action(error));
    }
  }
}