import { Action } from "../../actions"
import { getLoginAction } from "@/infrastructure/actions/auth/login"
import { DefaultResponse, Response } from "@/infrastructure/models/index.model"
import { DefaultProduct, ProductData } from "@/infrastructure/models/product/product.model"

export default (state = DefaultProduct, { type, payload }: Action): Response<ProductData> => {

    switch (type) {
        case getLoginAction.loading.type:
            return { ...state }
        case getLoginAction.success.type:
            return { ...state, data: payload.data }
        case getLoginAction.failure.type:
            return { ...state }
        default:
            return { ...state };
    }

}