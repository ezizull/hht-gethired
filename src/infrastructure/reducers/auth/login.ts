import { getLoginAction } from "@/infrastructure/actions/auth/login";
import { DefaultProfile, ProfileState } from "@/infrastructure/models/user/profile.model";
import { Action } from "../../actions";

export default (state = DefaultProfile, { type, payload }: Action): ProfileState => {

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
