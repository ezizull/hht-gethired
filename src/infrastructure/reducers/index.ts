import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { TypedUseSelectorHook, useSelector as reduxSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import { ProfileData, ProfileState } from "../models/user/profile.model";
import { Response } from "../models/index.model";
import { Action } from "../actions";
import storage from "redux-persist/lib/storage";
import loginReducer from "./auth/login";
import logoutReducer from "./auth/logout";

const presistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    loginData: persistReducer<ProfileState, Action>(presistConfig, loginReducer),
    logoutData: persistReducer<ProfileState, Action>(presistConfig, logoutReducer),
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;