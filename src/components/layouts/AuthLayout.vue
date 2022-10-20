<template>
  <v-container fluid class="h-screen bg-grey">
    <v-row class="fill-height">
      <v-col
        cols="12"
        lg="6"
        class="d-lg-flex justify-space-around align-center hidden-sm-and-down"
      >
        <slot name="logo">
          <v-img :src="logo" class="my-3" contain max-height="200" />
        </slot>
      </v-col>
      <v-col cols="12" lg="4" class="d-flex justify-center align-center">
        <slot name="default"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "@/assets/logo.svg";

export default {
  setup() {
    return {};
  },
  data() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
