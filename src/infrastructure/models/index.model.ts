import { ConstDefaultResponse } from "../../utils/constants/response.consts";

export interface Response<T extends Object[] | Object | null> {
    status: number;
    message: string;
    data: T;
}

export interface Paginate {
    offset: number;
    limit: number;
    data: Object[] | Object | null;
}

export interface Meta {
    offset: number;
    limit?: number;
}

export const DefaultResponse: Response<null> = {
    status: ConstDefaultResponse.default.code,
    message: ConstDefaultResponse.default.message,
    data: null,
};

export const DefaultMeta: Meta = {
    offset: 0,
    limit: 3,
}