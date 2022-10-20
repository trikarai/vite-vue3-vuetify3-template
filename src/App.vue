<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>

    <app-overlay />
    <teleport to="body">
      <app-modal-success />
      <app-modal-error />
    </teleport>
  </v-app>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  setup() {
    const route = useRoute();
    const layout = computed(() => {
      return (route.meta.layout ?? "empty") + "-layout";
    });
    return { layout };
  },
};
</script>
