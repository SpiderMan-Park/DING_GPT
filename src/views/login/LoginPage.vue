<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const username = ref('')
const password = ref('')
const signInLoading = ref(false)
const signUpLoading = ref(false)
const router = useRouter()
const onSignIn = () => {
    signInLoading.value = true
    setTimeout(() => {
        signInLoading.value = false
    }, 3000)
    router.push('/chat')
}
const onSignUp = () => {
    signUpLoading.value = true
    setTimeout(() => {
        signUpLoading.value = false
    }, 3000)
    // router.push('/chat')rigeorgene00@hotmail.com----YUUEECN143
}
</script>
<template>
    <div class="wrap">
        <div class="login">
            <div class="title">:echo GPT <span class="cursor">_</span></div>
            <q-input standout="bg-teal text-white" v-model="username" label="Username" class="inp" />
            <q-input standout="bg-teal text-white" v-model="password" label="Password" type="password" class="inp" />
            <q-btn type="submit" :loading="signInLoading" label="Sign In" class="q-mt-md" color="teal" @click="onSignIn">
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
            <q-btn type="submit" :loading="signUpLoading" label="Sign Up" class="q-mt-md" color="teal" @click="onSignUp">
                <template v-slot:loading>
                    <q-spinner-facebook />
                </template>
            </q-btn>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.wrap {
    height: 100vh;
    width: 100%;
    background: $chatWindowDarkColor;
    display: flex;
    align-items: center;
    justify-content: center;

    .login {
        min-width: 24rem;
        min-height: 38rem;
        padding: 100px 50px 80px 50px;
        background: $chatWindowLightColor;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        background: #f2f1e9;
        box-shadow: 55px 57px 69px 10px rgba(34, 34, 31, 1);

        .inp {
            margin-bottom: 20px;
        }

        .title {
            flex: 1;
            font-family: monospace;
            font-size: 34px;
            font-weight: 500;
            user-select: none;

            .cursor {
                animation: blink .6s linear infinite alternate;
            }
        }

        .logo {
            width: 284px;
            height: 100px;
        }
    }
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>