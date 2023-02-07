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

        <v-btn>
          
            <v-text-field v-model="color" v-mask="mask" hide-details class="ma-0 pa-0" solo>
              <template v-slot:append>
                <v-menu v-model="menu" top nudge-bottom="105" nudge-left="16" :close-on-content-click="false">
                  <template v-slot:activator="{ on }">
                    <div :style="swatchStyle" v-on="on" />
                  </template>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-color-picker v-model="color" flat />
                    </v-card-text>
                  </v-card>
                </v-menu>
              </template>
            </v-text-field>
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
            class="mt-8"
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
      color: '#1976D2FF',
      mask: '!#XXXXXXXX',
      menu: false,
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
  computed: {
    swatchStyle() {
      const { color, menu } = this
      return {
        backgroundColor: color,
        cursor: 'pointer',
        height: '30px',
        width: '30px',
        borderRadius: menu ? '50%' : '4px',
        transition: 'border-radius 200ms ease-in-out'
      }
    },
  },
};
</script>

