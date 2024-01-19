
import { ProductForm, DefaultProducts, ProductData } from "@/infrastructure/models/product/product.model";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormEvent } from "@/infrastructure/models/app/event";
import { ProfileData } from "@/infrastructure/models/user/profile.model";
import { ConstMessage } from "@/utils/constants/message.consts";
import { useDispatch } from "react-redux";
import { ReactRenderer, useCurrentEditor } from "@tiptap/react";
import secureLocalStorage from "react-secure-storage";


export function initFunc() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const location = useLocation();

  const userData = secureLocalStorage.getItem("user") as ProfileData;

  return { navigate, dispatch, location, userData };
}

export function productFunc() {
  const [products, setProducts] = useState(DefaultProducts);
  const [product, setProduct] = useState(ProductForm);

  function submitProduct(event?: FormEvent) {
    event?.preventDefault();

    const errors = {
      nameError: product.name.length < 1 ? ConstMessage.name.error : '',
      skuError: product.sku.length < 1 ? ConstMessage.sku.error : '',
      brandError: product.brand.length < 1 ? ConstMessage.brand.error : '',
      descriptionError: product.description.length < 1 ? ConstMessage.description.error : '',
    };

    setProduct({
      ...product,
      ...errors,
      isNameError: errors.nameError.length > 0,
      isSkuError: errors.skuError.length > 0,
      isBrandError: errors.brandError.length > 0,
      isDescriptionError: errors.descriptionError.length > 0,
    });

    if (
      !errors.nameError &&
      !errors.skuError &&
      !errors.brandError &&
      !errors.descriptionError
    ) {
      if (product.method === 'create') {

        setProducts([...products, {
          id: products.length,
          name: product.name,
          brand: product.brand as 'Brand 1' | 'Brand 2' | 'Brand 3' | '',
          sku: product.sku,
          description: product.description,
        }]);
        setProduct(ProductForm);

      } else {

        const updatedIndex = products.findIndex(oldProduct => oldProduct.id === product.id);
        console.log(updatedIndex)
        if (updatedIndex !== -1) {

          const updatedProducts = [...products];
          updatedProducts[updatedIndex] = {
            ...product,
            brand: product.brand as 'Brand 1' | 'Brand 2' | 'Brand 3' | '',
          };

          setProducts(updatedProducts);
          setProduct(ProductForm);

        }
      }
    }
  }

  function updateProduct(selected: ProductData) {
    const editProduct = products.find(product => product.id === selected.id);
    if (editProduct) {
      setProduct({
        ...ProductForm,
        method: 'update',
        id: selected.id,
        name: selected.name,
        sku: selected.sku,
        brand: selected.brand,
        description: selected.description,
      });
    }
  }

  function deleteProduct(selected: ProductData) {
    const newProducts = products.filter(product => product.id !== selected.id);
    setProducts(newProducts);
  }

  return { product, setProduct, submitProduct, deleteProduct, updateProduct, products }
}