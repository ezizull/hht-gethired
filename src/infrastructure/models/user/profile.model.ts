import { ConstDefaultResponse } from "@/utils/constants/response.consts";
import { Response } from "../index.model";

export interface ProfileData {
    email: string;
    name: string;
}


export const DefaultProfile: Response<ProfileData> = {
    status: ConstDefaultResponse.default.code,
    message: ConstDefaultResponse.default.message,
    data: {
        email: '',
        name: '',
    },
};