
import { ProductForm, DefaultProducts, ProductData } from "@/infrastructure/models/product/product.model";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormEvent } from "@/infrastructure/models/app/event";
import { ProfileData } from "@/infrastructure/models/user/profile.model";
import secureLocalStorage from "react-secure-storage";
import { useDispatch } from "react-redux";
import { getLogout } from "@/infrastructure/actions/auth/logout";
import { ConstMessage } from "@/utils/constants/message.consts";

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

    setProduct({
      ...product,
      method: 'create',
      nameError: product.name.length < 1 ? ConstMessage.name.error : '',
      isNameError: product.name.length < 1,
      skuError: product.sku.length < 1 ? ConstMessage.sku.error : '',
      isSkuError: product.sku.length < 1,
      brandError: product.brand.length < 1 ? ConstMessage.brand.error : '',
      isBrandError: product.brand.length < 1,
      descriptionError: product.description.length < 1 ? ConstMessage.description.error : '',
      isDescriptionError: product.description.length < 1,
    })
  }

  function deleteProduct(selected: ProductData) {
    const newProducts = products.filter(product => product.id !== selected.id);
    setProducts(newProducts);
  }

  return { product, setProduct, createProduct, deleteProduct, products }
}