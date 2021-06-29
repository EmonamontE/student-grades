<template>
  <div>
    <v-toolbar app dark>
      <v-toolbar-title
        v-text="'Greetings, Commander'"
      ></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
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
          title: 'First Journal',
          route: '/firstjournal'
        },
        {
          title: 'Second Journal',
          route: '/secondjournal'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
