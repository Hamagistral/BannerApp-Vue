<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-card class="mx-auto" max-width="1000">
          <v-card-actions>
            <v-btn color="orange lighten-2" text> Liste des Affichages </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show"> 
              <v-divider></v-divider>
              <v-select
             
                :items="items"
                label="Select Interface"
                dense
                solo
              ></v-select>

              <v-btn
                class="ma-2"
                :loading="loading"
                :disabled="loading"
                color="secondary"
                @click="loader = 'loading'"
              >
                Accept Terms
              </v-btn>

              <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                Nouvelle Interface
              </v-btn>
  
              <v-btn color="green lighten-2" dark to="/dynamicPage">
                Afficher
              </v-btn>
            </div>
          </v-expand-transition>
        </v-card>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Add Interfaces
        </v-card-title>

        <v-tabs>
          <v-tab>Créer un nouvelle Interface</v-tab>
          <v-tab-item>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-row align="center" justify="space-around">
              <v-col cols="12" sm="6" md="4">
                <v-text-field dense label="Nom Interface" v-model="newItem"></v-text-field
                ></v-col
              ><v-btn tile color="success" v-on:click="items.push(newItem)" @click="dialog = false">
                  <v-icon left> mdi-pencil </v-icon>
                  Créer
                </v-btn></v-row
            >
          </v-tab-item>
          <v-tab>Importer une Interface</v-tab>
          <v-tab-item>Test</v-tab-item>
        </v-tabs>

        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Fermer </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>





<script>


export default {
  components: {
  },
 
  data() {
    return {
      newItem: "",
      show: false,
      dialog: false,
      items: ["Interface 1", "Interface 2", "Interface 3", "Interface 4"],
    };
  },
};
</script>