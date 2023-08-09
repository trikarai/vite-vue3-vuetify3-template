<template>
  <v-card class="pa-5 w-100">
    <v-row>
      <v-col cols="12">
        <v-text-field variant="outlined" :label="$t('fields.email')" v-model="form.email"
          :error-messages="v$.email?.$errors">
          <template v-slot:message="{ message }">
            {{ message.$message }}
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field variant="outlined" :label="$t('fields.password')" v-model="form.password"
          :error-messages="v$.password?.$errors">
          <template v-slot:message="{ message }">
            {{ message.$message }}
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn @click="login">{{ $t('auth.login') }}</v-btn>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        {{ $t('auth.forgotPassword') }}
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { useAuth } from "@/store/auth/Auth"
import { useModal } from "@/store/modal/Modal"
import { computed, reactive } from "vue"

import useVuelidate from "@vuelidate/core"
import { required, email } from "@/plugins/validator"

export default {
  setup() {
    const auth = useAuth()
    const modal = useModal()

    const form = reactive({
      email: "",
      password: "",
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required },
      };
    });

    const v$ = useVuelidate(rules, form, { $autoDirty: true });

    return { v$, auth, form, modal };
  },
  methods: {
    login() {
      this.v$.$touch();
      if (this.v$.$invalid) return;

      this.auth
        .login(this.form)
        .then(() => {
          this.$router.replace({ path: "/dashboard" });
        })
        .catch((res) => {
          this.modal.SET_ERROR(res)
        })
        .finally(() => { });
    },
  },
};
</script>

<style lang="scss" scoped></style>
