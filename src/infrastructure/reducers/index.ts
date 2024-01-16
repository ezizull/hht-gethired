import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import login from "./auth/login";
import logout from "./auth/logout";
import product from "./product/product";

const presistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    login: persistReducer<any, any>(presistConfig, login),
    logout: persistReducer<any, any>(presistConfig, logout),
    product: persistReducer<any, any>(presistConfig, product),
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
export const Persistor = persistStore(Store);
export type RootState = ReturnType<typeof rootReducer>;
