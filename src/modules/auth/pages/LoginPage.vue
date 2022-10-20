<template>
  <v-card class="pa-5 w-100">
    <v-row>
      <v-col cols="12">
        <v-text-field variant="outlined" label="E-mail" v-model="form.email" :error-messages="v$.email?.$errors">
          <template v-slot:message="{ message }">
            {{ message.$message }}
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field variant="outlined" label="Password" v-model="form.password"
          :error-messages="v$.password?.$errors">
          <template v-slot:message="{ message }">
            {{ message.$message }}
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-end">
        <v-btn @click="login">Login</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { useAuth } from "@/store/auth/Auth"
import { useModal } from "@/store/modal/Modal"
import { computed, reactive } from "vue"

import useVuelidate from "@vuelidate/core"
import { required, email } from "@vuelidate/validators"

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

<style lang="scss" scoped>

</style>
