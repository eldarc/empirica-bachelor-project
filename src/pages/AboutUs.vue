<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <translate tag="h1" class="text-center">O nama</translate>
      </div>
      <div class="col-12" v-translate md>
        ABOUT_US_TEXT
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.pageTitle,
      meta: [
        {
          vmid: 'og:title',
          property: 'og:title',
          content: this.pageTitle,
          template: chunk => this.titleTemplate.replace('%s', chunk)
        },
        {
          vmid: 'og:description',
          property: 'og:description',
          content: this.ogDescription
        },
        {
          vmid: 'og:image',
          property: 'og:image',
          content: this.ogImage
        },
        {
          vmid: 'og:url',
          property: 'og:url',
          content: this.ogUrl
        }
      ]
    }
  },
  computed: {
    titleTemplate () {
      return this.$gettext('%s | eMPIRICA - Visoka škola računarstva i poslovnih komunikacija')
    },
    pageTitle () {
      return this.$gettext('O nama')
    },
    ogDescription () {
      return this.$gettext('Visoka škola računarstva i poslovnih komunikacija eMPIRICA izvodi studij u skladu s Bolonjskom reformom, po najvišim evropskim i svjetskim standardima, na principima akademizma i prema visokim moralnim vrijednostima, proizvodeći tržišno poželjan kadar mladih informatičkih stručnjaka osposobljenih da utiču na razvoj okruženja.')
    },
    ogImage () {
      return 'https://eczavrsni.website/static/social/' + this.$i18n.activeLocale + '/about_us.jpg'
    },
    ogUrl () {
      return 'https://eczavrsni.website' + this.$route.fullPath
    }
  }
}
</script>
