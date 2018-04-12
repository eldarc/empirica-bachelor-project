<template>
  <b-navbar class="app-navbar" toggleable="md" type="dark" variant="info">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"/>

      <b-navbar-brand to-l="/">
        <img src="@/assets/logo.png" alt="Empirica">
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to-l="/" exact>
            <translate>Početna</translate>
          </b-nav-item>
          <b-nav-item to-l="/about-us">
            <translate>O nama</translate>
          </b-nav-item>
          <b-nav-item-dropdown :text="TEXT__STUDY_PROGRAMMES" right>
            <b-dropdown-item to-l="/study-programmes/engineering">
              <translate>Inženjerska informatika</translate>
            </b-dropdown-item>
            <b-dropdown-item to-l="/study-programmes/business">
              <translate>Poslovna informatika</translate>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to-l="/ecampus">
            <translate>eCampus</translate>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto app-navbar__language-selector">
          <span v-if="$i18n.activeLocale === 'bs'" @click="$changeLocale('en')">English</span>
          <span v-else @click="$changeLocale('bs')">B/H/S jezik</span>
        </b-navbar-nav>

      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    TEXT__STUDY_PROGRAMMES () {
      return this.$gettext('Studijski programi')
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-navbar {
    background-color: #ff7707 !important;

    &__language-selector {
      color: #fff;

      span {
        cursor: pointer;
      }
    }
  }
</style>
