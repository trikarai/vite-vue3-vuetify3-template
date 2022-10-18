<template>
    <v-overlay scroll-strategy="block" :model-value="modal.overlay" class="align-center justify-center" persistent>
        <lottie :animationData="animationData" :speed="2" :height="300" :width="300" />
    </v-overlay>
</template>

<script>
import { useModal } from '@/store/modal/Modal';

import { Vue3Lottie } from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import animationData from "@/assets/lottie/loading.json";

export default {
    setup() {
        const modal = useModal()

        return { modal }
    },
    components: {
        lottie: Vue3Lottie,
    },
    data() {
        return {
            animationData,
        };
    },
}
</script>

<style lang="scss" scoped>
</style>
