import { Action } from "../../actions"
import { getLoginAction } from "@/infrastructure/actions/auth/login"
import { DefaultResponse, Response } from "@/infrastructure/models/index.model"


export default (state = DefaultResponse, { type, payload }: Action): Response<null> => {

    switch (type) {
        case getLoginAction.loading.type:
            return { ...state }
        case getLoginAction.success.type:
            return { ...state }
        case getLoginAction.failure.type:
            return { ...state }
        default:
            return { ...state };
    }

}