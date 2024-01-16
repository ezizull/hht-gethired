
import { ProductForm, DefaultProducts } from "@/infrastructure/models/product/product.model";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormEvent } from "@/infrastructure/models/app/event";

export function initFunc() {
  const navigate = useNavigate();
  const location = useLocation();

  return { navigate, location };
}

export function productFunc() {
  const [product, setProduct] = useState(ProductForm);
  const [products, setProducts] = useState(DefaultProducts);

  function submitForm(event?: FormEvent) {
    event?.preventDefault();
  }

  return { product, setProduct, submitForm, products }
}