<template>
  <grid-layout
    :layout.sync="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="draggable"
    :is-resizable="resizable"
    :responsive="false"
    :vertical-compact="false"
    :prevent-collision="true"
    :use-css-transforms="true"
  >
    <grid-item
      v-for="(item, index) in layout"
      :key="index"
      :static="item.static"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      <Container>
        <Draggable>
          <v-text-field label="Insert Text" outlined clearable></v-text-field>
        </Draggable>
      </Container>
    </grid-item>
  </grid-layout>
</template>

<script src="vue-grid-layout.umd.min.js"></script>
<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { GridLayout, GridItem } from "vue-grid-layout";

export default {
  components: {
    GridLayout,
    GridItem,
    Container,
    Draggable,
  },
  data() {
    return {
      layout: [{ x: 0, y: 0, w: 3, h: 3, i: "My First", static: false }],
      draggable: true,
      resizable: true,
      index: 0,
    };
  },
};
</script>


<style scoped>
.vue-grid-layout {
  background: red;
}
div.vue-grid-layout {
  display: inline;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #e9e9e9;
  border: 1px solid black;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
</style>