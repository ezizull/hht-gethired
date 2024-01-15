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

export const DefaultProduct: ProductData = {
    id: 0,
    nama: '',
    sku: '',
    deskripsi: '',
};