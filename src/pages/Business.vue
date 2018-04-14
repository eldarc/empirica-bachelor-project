<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <translate tag="h1" class="text-center">Poslovna informatika</translate>
      </div>
      <div class="col-12" v-translate md>
        BUSINESS_TEXT
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
      return this.$gettext('Poslovna informatika')
    },
    ogDescription () {
      return this.$gettext('BUSINESS_TEXT')
    },
    ogImage () {
      return 'https://20413c71.ngrok.io' + '/static/social/' + this.$i18n.activeLocale + '/business.jpg'
    },
    ogUrl () {
      return 'https://eldarempirica.ws' + this.$route.fullPath
    }
  }
}
</script>
