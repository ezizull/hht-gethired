import { ConstRequest } from "@/utils/constants/request.consts";
import { RequestAction } from "@/utils/infrastructure/actions/request.actions";
import { AsyncAction, Dispatch } from "..";
import { ProductBody, ProductData } from "@/infrastructure/models/product/product.model";
import * as fs from 'fs';


export const getProductActions = RequestAction<ProductData>(ConstRequest.product.data);
export function getProducts(form: ProductBody): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(getProductActions.loading);

      const responJSON = fs.readFileSync("product.json");
      console.log(responJSON);
      // const response = JSON.parse(responJSON);

      // dispatch(getProductActions.success.action());
    } catch (error: any) {
      dispatch(getProductActions.failure.action(error));
    }
  }
}