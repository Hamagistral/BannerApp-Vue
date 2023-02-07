<template>
  <v-app>
    <v-main  fluid>>
      <v-container fill-height fluid>
        <router-view align="center" justify="center" fluid>></router-view>
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