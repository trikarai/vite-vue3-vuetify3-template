import axios from 'axios'
import { useAuth } from '@/store/auth/Auth'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // headers: { issuer: "WEBAPP", "accept-language": "id" },
});

http.interceptors.request.use((config) => {

    const auth = useAuth()

    // Fix Object is possibly 'undefined'
    // https://stackoverflow.com/questions/70085215/how-to-fix-config-headers-authorization-object-is-possibly-undefined-when-usin
    if (config.headers === undefined) {
        config.headers = {};
    }

    if (auth.isAuthenticated) {
        config.headers.Authorization = `Bearer ${auth.token}`
    }
    if (config.data instanceof FormData) {
        config.headers = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth.token}`
        };
    }
    return config;
}, (error) => Promise.reject(error))

http.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (!error.response) {
            console.log("Please check your internet connection.");
        }

        const originalConfig = error?.config

        const oriUrl = "/auth/login"
        const refreshUrl = "/auth/refresh-token"

        if (originalConfig.url === refreshUrl && error.response?.status === 401) {
            // redirect route to login
            // router.push({ name: "Login", replace: true })
            throw error;
        }

        if (originalConfig.url !== oriUrl && error.response) {
            // Access Token was expired
            if (error.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true

                try {
                    const rs = await instance.post(refreshUrl, {
                        token: auth.refreshToken
                    })
                    const { token } = rs.data?.data
                    auth.refreshToken = token

                    return axios(originalConfig);
                } catch (_error) {
                    throw error
                }
            } else if (error?.response.status === 404) {
                // Redirect To Not Found Page
            } else if (error?.response.status === 502) {
                // Redirect To Maintenance Page
            } else if (error?.response.status === 503) {
                // Redirect To Server Busy Page
            } else if (error?.response.status === 403 || error?.status === 401) {
                auth.$reset()
                // redirect route to login
                // router.push({ name: "Login", replace: true })
            }
        }

        if (error.response.status >= 500) {
            // handle 500 if necessary
        }


        return Promise.reject(error)
    }
)

export default http
