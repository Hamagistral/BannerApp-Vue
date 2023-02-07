<template>
  <div>
    <template>
      <v-form class="primary pa-8 lighten-4 rounded" ref="form" v-model="valid" lazy-validation>
        <v-btn color="primary" class="mr-4">
          Fermer
        </v-btn>

        <v-btn color="secondary" class="mr-4" @click="addMore()">
          Ajouter Texte
        </v-btn>

        <v-btn color="error" class="mr-4" @click="addImage()">
          Ajouter Image
        </v-btn>

        <v-btn color="error" class="mr-4" @click="addImage()">
          Choisir Couleur
        </v-btn>

        <v-btn color="warning" class="mr-4">
          Changer Interface
        </v-btn>

        <v-btn color="success" class="mr-4">
          Enregistrer
        </v-btn>


        <template>
          <v-file-input
            show-size
            counter
            multiple
            label="File input"
            v-model="chosenFile"
          ></v-file-input>
        </template>
      </v-form>
    </template>

    <div v-for="(course, index) in courses" :key="`text-${index}`">
      <WidgetText></WidgetText>
    </div>
    <div v-for="(file, index) in previewImages" :key="`image-${index}`">
      <WidgetImage :previews="file" vif="file"></WidgetImage>
    </div>
  </div>
</template>

<script>
import WidgetText from "./WidgetText";
import WidgetImage from "./WidgetImage";

export default {
  name: "dynamicPage",
  components: {
    WidgetText,
    WidgetImage,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      chosenFile: null,
      valid: false,

      preview: [
        {
          name: "AAA.jpg",
          chosenFile: "yasser",
        },
      ],

      previewImages: [],
      courses: 0,
    };
  },
  watch: {
    chosenFile: {
      handler(nw, od) {
        console.log(nw);
      },
      deep: true,
    },
  },
  methods: {
    clean() {
      this.chosenFile = null;
    },
    addMore() {
      this.courses += 1;
    },
    addImage() {
      if(this.chosenFile) {
      this.previewImages.push(...this.chosenFile);
      this.clean();
      } else {
        alert('Erreur, Veuillez choisir !')
      }
    },
  },
};
</script>

