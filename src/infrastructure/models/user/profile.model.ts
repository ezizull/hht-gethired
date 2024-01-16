import { ConstDefaultResponse } from "@/utils/constants/response.consts";
import { Response } from "../index.model";

export interface ProfileData {
    email: string;
    name: string;
}

export interface ProfileState {
    status: number;
    message: string;
    data: ProfileData | undefined
}

export const DefaultProfile: ProfileState = {
    status: ConstDefaultResponse.default.code,
    message: ConstDefaultResponse.default.message,
    data: undefined,
};