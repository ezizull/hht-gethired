export interface ProductData {
    id: number;
    name: string;
    sku: string;
    brand: 'Brand 1' | 'Brand 2' | 'Brand 3' | '';
    description: string;
}

export interface ProductForm {
    method: 'create' | 'update';
    id: number;
    name: string;
    nameError: string;
    isNameError: boolean;
    sku: string;
    skuError: string;
    isSkuError: boolean;
    brand: string;
    brandError: string;
    isBrandError: boolean;
    description: string;
    descriptionError: string;
    isDescriptionError: boolean;
};

export const ProductForm: ProductForm = {
    method: 'create',
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
    {
        id: 4,
        name: 'Produk 4',
        sku: 'SKU423',
        brand: 'Brand 3',
        description: 'Description produk 4',
    },
    {
        id: 5,
        name: 'Produk 5',
        sku: 'SKU456',
        brand: 'Brand 2',
        description: 'Description produk 5',
    },
    {
        id: 6,
        name: 'Produk 6',
        sku: 'SKU789',
        brand: 'Brand 1',
        description: 'Description produk 6',
    },
];
