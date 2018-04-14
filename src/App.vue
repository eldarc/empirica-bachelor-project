<template>
  <div>
    <div id="app" class="app">
      <app-navigation/>
      <router-view class="content"/>
      <app-footer/>
    </div>
  </div>
</template>

<script>
import AppNavigation from '@/components/Navigation.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppNavigation,
    AppFooter
  },
  metaInfo () {
    return {
      titleTemplate: this.titleTemplate
    }
  },
  computed: {
    titleTemplate () {
      return this.$gettext('%s | eMPIRICA - Visoka škola računarstva i poslovnih komunikacija')
    }
  }
}
</script>

<style lang="scss">
  // Load fonts.
  @import "~styles/fonts/roboto";

  // Load Bootstrap + bootstrap-vue.
  @import '~bootstrap/scss/bootstrap';
  @import '~styles/bootstrap-vue';

  // Load dependencies.
  // @import 'vue-multiselect/dist/vue-multiselect.min.css'; // .css imports don't need the `~` prefix.

  // Global Switex styling.
  @import "~styles/app-styles";

  // Sticky footer structure.
  .app {
    position: relative;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background-color: #fff;
  }

  .content {
    flex: 1;
  }
</style>
