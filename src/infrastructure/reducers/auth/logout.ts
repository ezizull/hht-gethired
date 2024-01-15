import { ConstRequest } from "../../../utils/constants/request.consts"
import { Action } from "../../actions"
import { DefaultResponse } from "../../models/index.model"

export default (state = DefaultResponse, { type, payload }: Action) => {

    switch (type) {
        case ConstRequest.logout.data.loading:
            return { ...state }
        case ConstRequest.logout.data.success:
            return { ...state }
        case ConstRequest.logout.data.failure:
            return { ...state }
        default:
            return state;
    }

}