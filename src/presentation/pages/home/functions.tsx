
import { ProductForm, DefaultProducts, ProductData } from "@/infrastructure/models/product/product.model";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormEvent } from "@/infrastructure/models/app/event";
import { ProfileData } from "@/infrastructure/models/user/profile.model";
import secureLocalStorage from "react-secure-storage";
import { ConstMessage } from "@/utils/constants/message.consts";
import { useDispatch } from "react-redux";

export function initFunc() {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const location = useLocation();

  const userData = secureLocalStorage.getItem("user") as ProfileData;

  return { navigate, dispatch, location, userData };
}

export function productFunc() {
  const [product, setProduct] = useState(ProductForm);
  const [products, setProducts] = useState(DefaultProducts);

  function createProduct(event?: FormEvent) {
    event?.preventDefault();

    const errors = {
      nameError: product.name.length < 1 ? ConstMessage.name.error : '',
      skuError: product.sku.length < 1 ? ConstMessage.sku.error : '',
      brandError: product.brand.length < 1 ? ConstMessage.brand.error : '',
      descriptionError: product.description.length < 1 ? ConstMessage.description.error : '',
    };

    setProduct({
      ...product,
      method: 'create',
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
      setProducts([...products, {
        id: products.length,
        name: product.name,
        brand: product.brand as 'Brand 1' | 'Brand 2' | 'Brand 3' | '',
        sku: product.sku,
        description: product.description,
      }]);
      setProduct(ProductForm);
    }
  }

  function updateProduct(selected: ProductData) {

  }

  function deleteProduct(selected: ProductData) {
    const newProducts = products.filter(product => product.id !== selected.id);
    setProducts(newProducts);
  }

  return { product, setProduct, createProduct, deleteProduct, updateProduct, products }
}