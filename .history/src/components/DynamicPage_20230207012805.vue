<template>
  <div>
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-btn color="error" class="mr-4" @click="addMore()">
          Add Your Text
        </v-btn>

        <v-btn color="warning" class="mr-4" @click="addImage()">
          Add Your Image
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
      /*n ' est pas utilise*/
      preview: [
        {
          name: "AAA.jpg",
          chosenFile: "yasser",
        },
      ],
      /*---*/
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

