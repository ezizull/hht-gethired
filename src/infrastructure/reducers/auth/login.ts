import { getLoginAction } from "@/infrastructure/actions/auth/login";
import { DefaultProfile, ProfileData } from "@/infrastructure/models/user/profile.model";
import { Response } from "@/infrastructure/models/index.model";
import { Action } from "../../actions";

export default (state = DefaultProfile, { type, payload }: Action): Response<ProfileData> => {

    switch (type) {
        case getLoginAction.loading.type:
            return { ...state };
        case getLoginAction.success.type:
            return { ...state, data: payload?.data };
        case getLoginAction.failure.type:
            return { ...state };
        default:
            return { ...state };
    }

}
