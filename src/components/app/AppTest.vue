<template>
  <v-chip>{{ title }}</v-chip>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number],
      default: "Title",
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped></style>
