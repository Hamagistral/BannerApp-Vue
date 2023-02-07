<template>
  <v-app>
    <v-main>
      <v-container class="mx-auto" width="1000" fluid>
        <router-view></router-view>
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