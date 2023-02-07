<template>
  <v-app>
    <v-main>
      <v-container fill-height fluid>
        <router-view  ></router-view>
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