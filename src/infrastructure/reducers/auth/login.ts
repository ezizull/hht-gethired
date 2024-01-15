import { ConstRequest } from "../../../utils/constants/request.consts"
import { Action } from "../../actions"
import { DefaultResponse } from "../../models/index.model"

export default (state = DefaultResponse, { type, payload }: Action) => {

    switch (type) {
        case ConstRequest.login.data.loading:
            return { ...state }
        case ConstRequest.login.data.success:
            return { ...state }
        case ConstRequest.login.data.failure:
            return { ...state }
        default:
            return state;
    }

}