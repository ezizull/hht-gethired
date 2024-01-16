import { ConstDefaultResponse } from "@/utils/constants/response.consts";
import { Response } from "../index.model";

export interface ProductData {
    id: number;
    nama: string;
    sku: string;
    deskripsi: string;
}

export interface ProductBody {
    nama: string;
    sku: string;
    deskripsi: string;
}

export const DefaultProduct: Response<ProductData> = {
    status: ConstDefaultResponse.default.code,
    message: ConstDefaultResponse.default.message,
    data: {
        id: 0,
        nama: '',
        sku: '',
        deskripsi: '',
    },
};