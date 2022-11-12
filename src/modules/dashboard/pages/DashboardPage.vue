<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" :title="$t('myAccount')" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <div id="component">
      <p>{{ $t("message.hello") }}</p>
      <p>{{ $t("message.greeting") }}</p>
      <p>{{ $t("$vuetify.noDataText") }}</p>
    </div>
    <!--  -->
  </v-main>
</template>

<script>
export default {
  name: "DashboardPage",
  setup() {
    return {};
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      rail: true,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
