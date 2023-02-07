<template>
  <div class="text-center mx-auto">
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-card>
            <v-card-title color="warning" text>Liste des Affichages</v-card-title >

            <v-spacer></v-spacer>
            
            <v-card-actions>
              <div class="text-center"> 
                <v-divider></v-divider>
                <v-select
                  class="ma-2"
                  :items="items"
                  label="Select Interface"
                  dense
                  solo
                ></v-select>

                <v-btn class="ma-2 mb-8" color="warning" v-bind="attrs" v-on="on">
                  Nouvelle Interface
                </v-btn>
    
                <v-btn class="ma-2 mb-8" color="success" to="/dynamicPage">
                  Afficher
                </v-btn>

                <v-btn class="ma-2 mb-8" color="error">
                  Modifier
                </v-btn>
              </div>
            </v-card-actions>
        </v-card>
      </template>

      <v-card class="justify-center">
        <v-card-title class="text-h5 grey lighten-2">
          Add Interfaces
        </v-card-title>

        <v-tabs>
          <v-tab>Créer un nouvelle Interface</v-tab>
          <v-tab-item>
            
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