import { getProductActions } from "@/infrastructure/actions/product/product"
import { Action } from "../../actions"
import { DefaultResponse } from "../../models/index.model"

export default (state = DefaultResponse, { type, payload }: Action) => {

    switch (type) {
        case getProductActions.loading.type:
            return { ...state }
        case getProductActions.success.type:
            return { ...state }
        case getProductActions.failure.type:
            return { ...state }
        default:
            return state;
    }

}