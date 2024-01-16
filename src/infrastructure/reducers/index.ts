import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { TypedUseSelectorHook, useSelector as reduxSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import { ProfileData } from "../models/user/profile.model";
import { Response } from "../models/index.model";
import { Action } from "../actions";
import { ProductData } from "../models/product/product.model";
import storage from "redux-persist/lib/storage";
import loginReducer from "./auth/login";
import logoutReducer from "./auth/logout";
import productReducer from "./product/product";

const presistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    loginData: persistReducer<Response<ProfileData>, Action>(presistConfig, loginReducer),
    logoutData: persistReducer<Response<null>, Action>(presistConfig, logoutReducer),
    productData: persistReducer<Response<ProductData>, Action>(presistConfig, productReducer),
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;