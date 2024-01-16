import { ConstDefaultResponse } from "../../utils/constants/response.consts";

export interface Response<T extends Object[] | Object | null> {
    status: number;
    message: string;
    data: T;
}

export interface Paginate<T extends Object[] | Object | null> {
    offset: number;
    limit: number;
    data: T;
}

export const DefaultResponse: Response<null> = {
    status: ConstDefaultResponse.default.code,
    message: ConstDefaultResponse.default.message,
    data: null,
};
