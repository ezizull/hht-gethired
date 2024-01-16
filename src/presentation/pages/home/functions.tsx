
import { ProductForm, DefaultProducts } from "@/infrastructure/models/product/product.model";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormEvent } from "@/infrastructure/models/app/event";
import { DefaultProfile, ProfileData } from "@/infrastructure/models/user/profile.model";
import secureLocalStorage from "react-secure-storage";
import { Response } from "@/infrastructure/models/index.model";

export function initFunc() {
  const navigate = useNavigate();
  const location = useLocation();

  const userData = secureLocalStorage.getItem("user") as ProfileData;

  return { navigate, location, userData };
}

export function productFunc() {
  const [product, setProduct] = useState(ProductForm);
  const [products, setProducts] = useState(DefaultProducts);

  function submitForm(event?: FormEvent) {
    event?.preventDefault();
  }

  return { product, setProduct, submitForm, products }
}