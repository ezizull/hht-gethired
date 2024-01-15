export const ConstRequest = {
    // auth
    login: {
        data: {
            loading: "LOGIN_REQUEST",
            success: "LOGIN_SUCCESS",
            failure: "LOGIN_FAILURE",
        }
    },
    register: {
        data: {
            loading: "REGISTER_REQUEST",
            success: "REGISTER_SUCCESS",
            failure: "REGISTER_FAILURE",
        }
    },
    logout: {
        data: {
            loading: "LOGOUT_REQUEST",
            success: "LOGOUT_SUCCESS",
            failure: "LOGOUT_FAILURE",
        }
    },
    profile: {
        data: {
            loading: "PROFILE_REQUEST",
            success: "PROFILE_SUCCESS",
            failure: "PROFILE_FAILURE",
        }
    },

    // information
    banner: {
        data: {
            loading: "BANNER_REQUEST",
            success: "BANNER_SUCCESS",
            failure: "BANNER_FAILURE",
        }
    },
    service: {
        data: {
            loading: "SERVICE_REQUEST",
            success: "SERVICE_SUCCESS",
            failure: "SERVICE_FAILURE",
        }
    },

    // transaction
    image: {
        data: {
            loading: "IMAGE_REQUEST",
            success: "IMAGE_SUCCESS",
            failure: "IMAGE_FAILURE",
        },
        update: {
            loading: "UPDATE_IMAGE_REQUEST",
            success: "UPDATE_IMAGE_SUCCESS",
            failure: "UPDATE_IMAGE_FAILURE",
        },
    },
    transaction: {
        data: {
            loading: "TRANSACTION_REQUEST",
            success: "TRANSACTION_SUCCESS",
            failure: "TRANSACTION_FAILURE",
        },
        history: {
            loading: "TRANSACTION_HISTORY_REQUEST",
            success: "TRANSACTION_HISTORY_SUCCESS",
            failure: "TRANSACTION_HISTORY_FAILURE",
        },
    },
    balance: {
        data: {
            loading: "BALANCE_REQUEST",
            success: "BALANCE_SUCCESS",
            failure: "BALANCE_FAILURE",
        },
    },
    topup: {
        data: {
            loading: "TOPUP_REQUEST",
            success: "TOPUP_SUCCESS",
            failure: "TOPUP_FAILURE",
        },
    },
    pembayaran: {
        data: {
            loading: "PEMBAYARAN_REQUEST",
            success: "PEMBAYARAN_SUCCESS",
            failure: "PEMBAYARAN_FAILURE",
        }
    },
}