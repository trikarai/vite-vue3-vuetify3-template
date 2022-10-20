<template>
    <div>
        <v-dialog :model-value="modal.success" max-width="500" persistent transition="dialog-transition">
            <v-card class="pa-5" height="auto" rounded="xl">
                <v-row no-gutters>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn size="small" variant="icon" icon="mdi-close" @click="close"></v-btn>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center">
                        <v-img contain max-height="100" :src="icon"></v-img>
                    </v-col>
                    <v-col cols="12" class="py-5 d-flex justify-center font-weight-bold text-h5">
                        {{ modal.successTitle }}
                    </v-col>
                    <v-col cols="12" class="mb-5 d-flex justify-center align-center ">
                        <span class="message-title">{{ modal.successMessage }}</span>
                    </v-col>
                </v-row>
            </v-card>

        </v-dialog>
    </div>
</template>

<script>
import { useModal } from '@/store/modal/Modal';
import icon from "@/assets/icon/ic_success.svg"

export default {

    setup() {
        const modal = useModal()

        const close = () => {
            modal.$reset()
        }

        return {
            modal, close,
            icon
        }
    }
}
</script>

<style lang="scss" scoped>

</style>