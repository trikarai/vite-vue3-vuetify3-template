<template>
    <div>
        <v-dialog :model-value="modal.error" max-width="500" persistent transition="dialog-transition">
            <v-card class="pa-5" height="auto" rounded="xl">
                <v-row no-gutters>
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn size="small" variant="icon" icon="mdi-close" @click="close"></v-btn>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center">
                        <v-img contain max-height="100" :src="icon"></v-img>
                    </v-col>
                    <v-col cols="12" class="py-5 d-flex justify-center font-weight-bold text-h5">
                        {{ modal.errorTitle }}
                    </v-col>
                    <v-col cols="12" class="mb-5 d-flex justify-center align-center ">
                        <span class="message-title">{{ modal.errorMessage }}</span>
                    </v-col>
                </v-row>
            </v-card>

        </v-dialog>
    </div>
</template>

<script>
import { useModal } from '@/store/modal/Modal';
import icon from "@/assets/icon/ic_denied.svg"

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