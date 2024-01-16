export interface ProductData {
    id: number;
    name: string;
    sku: string;
    brand: 'Brand 1' | 'Brand 2' | 'Brand 3' | '';
    description: string;
}

export const ProductForm = {
    id: 0,
    name: '',
    nameError: '',
    isNameError: false,
    sku: '',
    skuError: '',
    isSkuError: false,
    brand: '',
    brandError: '',
    isBrandError: false,
    description: '',
    descriptionError: '',
    isDescriptionError: false,
};

export const DefaultProducts: Array<ProductData> = [
    {
        id: 1,
        name: 'Produk 1',
        sku: 'SKU123',
        brand: 'Brand 1',
        description: 'Description produk 1',
    },
    {
        id: 2,
        name: 'Produk 2',
        sku: 'SKU456',
        brand: 'Brand 2',
        description: 'Description produk 2',
    },
    {
        id: 3,
        name: 'Produk 3',
        sku: 'SKU789',
        brand: 'Brand 3',
        description: 'Description produk 3',
    },
];
