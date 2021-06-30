<template>
  <div>
    <v-toolbar app dark>
      <v-toolbar-title
        v-text="'Классный журнал'"
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="(item, i) in topMenuItems"
          flat
          :key="`menuItem${i}`"
          :to="item.route"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    topMenuItems () {
      return [
        {
          title: '10А класс',
          route: '/firstjournal'
        },
        {
          title: '10Б класс',
          route: '/secondjournal'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
