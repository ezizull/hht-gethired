import { ConstRequest } from "@/utils/constants/request.consts";
import { RequestAction } from "@/utils/infrastructure/actions/request.actions";
import { AsyncAction, Dispatch } from "..";
import { ProductBody, ProductData } from "@/infrastructure/models/product/product.model";


export const getProductActions = RequestAction<ProductData>(ConstRequest.product.data);
export function getProducts(form: ProductBody): AsyncAction {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(getProductActions.loading);

      // dispatch(getProductActions.success.action());
    } catch (error: any) {
      dispatch(getProductActions.failure.action(error));
    }
  }
}