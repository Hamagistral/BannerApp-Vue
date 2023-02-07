<template>
  <v-app>
    <v-main>
      <v-container class="m-auto" fluid>
        <router-view align="center" justify="center" ></router-view>
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