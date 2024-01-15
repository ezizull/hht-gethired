import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import secureLocalStorage from "react-secure-storage";

const presistConfig = {
    key: 'root',
    secureLocalStorage,
};

const rootReducer = combineReducers({

});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
export const Persistor = persistStore(Store);
export type RootState = ReturnType<typeof rootReducer>;
