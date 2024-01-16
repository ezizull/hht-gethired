export interface ProductData {
    id: number;
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

export const DefaultProducts: Array<ProductData> = [
    {
        id: 1,
        nama: 'Produk 1',
        sku: 'SKU123',
        deskripsi: 'Deskripsi produk 1',
    },
    {
        id: 2,
        nama: 'Produk 2',
        sku: 'SKU456',
        deskripsi: 'Deskripsi produk 2',
    },
    {
        id: 3,
        nama: 'Produk 3',
        sku: 'SKU789',
        deskripsi: 'Deskripsi produk 3',
    },
];
