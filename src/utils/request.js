import axios from 'axios'
import { useUserStore } from '@/stores'
const baseURL = 'http://49.235.109.77:8181'

const instance = axios.create({
    baseURL,
    timeout: 100000
})
const Xauth = 'VsUE-mnCf00LYHs8inIyWiV2tBpcHD7taHtl4ey0psQ'
// document.cookie = 'access-token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJyaWdlb3JnZW5lMDBAaG90bWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJwb2lkIjoib3JnLVdpT2VmWXpXM1l4eUJEZ0RlNWdJTWJxMyIsInVzZXJfaWQiOiJ1c2VyLU56YWkxSzk3YlFTbXZwNW9NNGVVT0dvYSJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiYXV0aDB8NjUxMDA1NTBmNzg3ZTVkNzg4ZTEyMzZmIiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5vcGVuYWkuYXV0aDBhcHAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcwMDQ2MTAyNCwiZXhwIjoxNzAxMzI1MDI0LCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9yZ2FuaXphdGlvbi53cml0ZSBvZmZsaW5lX2FjY2VzcyJ9.Nemt9J5-n0_fSWuRiE2LPN6VYCyzJ3z1D4BWOpSHeHQQEYnja2Br7wwc211yvm1cW7htrNeYBS_QuRprpLXMBxKbxDvlgqwMDKUEMyEKC6t6ygRTFAe9XtMPXLMMmb6pPhRB1q6tsMTMCKcivEcyMLKxe3wlOORlZhMI6fB4da7zeqZM2w5fP6t1pTijhf0GEKM2vBlgGriU_u7hMkTQntc3ybJ9qU0YxXAbjEvLRsUHpaKYBCJyLYC-ym5cT5vOUNPK1UuWwZQRv2VyelY-9qgdbPojoAxv7NuVXv5RWdbXr7lmYIKr4By9EFrJh24-Hh6KZ2Wa1ULwy4nI9rm4sQ; _Secure-next-auth.apps-origin=http://49.235.109.77:8181; _Secure-next-auth.session-id=cLz2XOqhLFvba6Mxpe5NkVPQuUQf8QKVt5dHOwz0sA4; _Secure-next-auth.session-data=MTcwMDU4ODY3N3x2LTVVb3dVZE9KZy1fYzRfbnlkaEpjZVBvUmtRSDFlVEFuOFFpNFh5MHZQZjl6dHFoLXZkSExKQnhBQ1o1UGY4VEk2cVBnUjRkZHJKVktOQ2RXWmdHMkpmb2NrNlB6TXh8dkOBqlXFTr8LiWjkjtYH3eX3KQqS9u_M-XXB_LP6HQs=; _dd_s=rum=0&expire=1700589981574'
instance.interceptors.request.use(
    (config) => {
        const userStore = useUserStore()
        if (userStore.token) {
            config.headers['X-Authorization'] = 'Bearer ' + Xauth
            // config.headers.Cookie = document.cookie
        }
        return config
    },
    (err) => Promise.reject(err)
)

instance.interceptors.response.use(
    (res) => {
        if (res.status == 200) {
            return res.data
        }
        return Promise.reject(res)
    }
)

export default instance
export { baseURL }