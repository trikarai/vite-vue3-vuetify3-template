<template>
  <v-app>
    <component :is="layout">
      <v-main>
        <router-view />
      </v-main>
    </component>
  </v-app>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const route = useRoute()
    const layout = computed(() => {
      return (route.meta.layout ?? 'div')
    })

    return { layout }
  }

}
</script>
