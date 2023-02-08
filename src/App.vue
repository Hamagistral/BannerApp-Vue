<template>
  <v-app>
    <v-main>
      <v-container class="pa-12" fluid>
        <router-view justify="center" ></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components: {},
};
</script>