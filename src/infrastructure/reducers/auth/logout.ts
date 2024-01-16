import { Action } from "../../actions"
import { getLogoutAction } from "@/infrastructure/actions/auth/login"
import { DefaultResponse } from "../../models/index.model"

export default (state = DefaultResponse, { type, payload }: Action) => {

    switch (type) {
        case getLogoutAction.loading.type:
            return { ...state }
        case getLogoutAction.success.type:
            return { ...state }
        case getLogoutAction.failure.type:
            return { ...state }
        default:
            return state;
    }

}