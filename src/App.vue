<template>
  <v-app>
    <component :is="currentLayout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>
export default {
  computed: {
    currentLayout: function () {
      return this.$route.meta.requiredLayout
    }
  }
}
</script>
