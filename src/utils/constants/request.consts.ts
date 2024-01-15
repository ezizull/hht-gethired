export const ConstRequest = {
    // auth
    login: {
        data: "GET_LOGIN_REQUEST",
    },
    logout: {
        post: "POST_LOGOUT_REQUEST",
    },

    // product
    product: {
        data: "GET_PRODUCT_REQUEST",
        post: "POST_PRODUCT_REQUEST",
        update: "UPDATE_PRODUCT_REQUEST",
        delete: "DELETE_PRODUCT_REQUEST",
    },
}