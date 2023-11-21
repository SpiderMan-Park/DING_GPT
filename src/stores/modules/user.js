import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useUserStore = defineStore(
    'user',
    () => {
        const token = ref('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJyaWdlb3JnZW5lMDBAaG90bWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZX0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJwb2lkIjoib3JnLVdpT2VmWXpXM1l4eUJEZ0RlNWdJTWJxMyIsInVzZXJfaWQiOiJ1c2VyLU56YWkxSzk3YlFTbXZwNW9NNGVVT0dvYSJ9LCJpc3MiOiJodHRwczovL2F1dGgwLm9wZW5haS5jb20vIiwic3ViIjoiYXV0aDB8NjUxMDA1NTBmNzg3ZTVkNzg4ZTEyMzZmIiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5vcGVuYWkuYXV0aDBhcHAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTcwMDQ2MTAyNCwiZXhwIjoxNzAxMzI1MDI0LCJhenAiOiJUZEpJY2JlMTZXb1RIdE45NW55eXdoNUU0eU9vNkl0RyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgbW9kZWwucmVhZCBtb2RlbC5yZXF1ZXN0IG9yZ2FuaXphdGlvbi5yZWFkIG9yZ2FuaXphdGlvbi53cml0ZSBvZmZsaW5lX2FjY2VzcyJ9.Nemt9J5-n0_fSWuRiE2LPN6VYCyzJ3z1D4BWOpSHeHQQEYnja2Br7wwc211yvm1cW7htrNeYBS_QuRprpLXMBxKbxDvlgqwMDKUEMyEKC6t6ygRTFAe9XtMPXLMMmb6pPhRB1q6tsMTMCKcivEcyMLKxe3wlOORlZhMI6fB4da7zeqZM2w5fP6t1pTijhf0GEKM2vBlgGriU_u7hMkTQntc3ybJ9qU0YxXAbjEvLRsUHpaKYBCJyLYC-ym5cT5vOUNPK1UuWwZQRv2VyelY-9qgdbPojoAxv7NuVXv5RWdbXr7lmYIKr4By9EFrJh24-Hh6KZ2Wa1ULwy4nI9rm4sQ')
        const setToken = (val) => { token.value = val }
        return {
            token, setToken
        }
    },
    {
        persist: {
            enabled: true,
            strategies: [
                { key: 'access-token', storage: localStorage },
            ]
        }
    }
)
