import { defineStore } from 'pinia'
import jwt_decode from "jwt-decode";
import api from '@/plugins/axios'

export const useAuth = defineStore('Auth', {
    state: () => ({
        token: null,
        refreshToken: "",
        user: {}
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
    },

    actions: {
        /**
        * @description Login
        *
        * @method POST
        * @url /auth/login
        * @access public
        *
        * @return {any}
        */
        async login(payload) {
            return api
                .post("/auth/login", payload)
                .then((res) => {
                    const { token, refresh_token } = res.data.data
                    const decoded = jwt_decode(token)

                    this.token = token
                    this.user = decoded
                    this.refreshToken = refresh_token
                    return res.data
                })
                .catch((err) => {
                    return Promise.reject(err);
                });
        },
    },
    // For activated persist state, you can add the code below:
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                key: "auth",
                // paths: [],
            },
        ],
    },
})
