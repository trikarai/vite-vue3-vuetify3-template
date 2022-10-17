<template>
    <div>
        this is login page
    </div>
</template>

<script>
import { useAuth } from '@/store/auth/Auth';
import { onMounted, reactive } from 'vue';

export default {
    setup () {
        
        const auth = useAuth()

        const form = reactive({
            email: '',
            password: ''
        })

        const login = () => {
            auth.login(form)
                .then((res) => {
                    console.log(res)
                })
                .finally(() => {})
        }

        onMounted(()=> {
            // login()
        })

        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>
