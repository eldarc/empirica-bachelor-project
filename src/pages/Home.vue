<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 mb-4">
        <translate tag="h1" class="text-center">Dobro došli na našu web stranicu</translate>
      </div>
      <div class="col-md-5 text-center text-md-left mb-3 mb-md-0">
        <img class="img-fluid" src="@/assets/welcome.jpg" alt="Welcome">
      </div>
      <div class="col-md-7" v-translate>
        Cijenjeni studenti, poštovani roditelji, drage kolege, uvaženi saradnici,<br><br>
        Visoka škola računarstva i poslovnih komunikacija eMPIRICA je moderna obrazovna i naučna institucija, koja radi na razvoju prestižnog imidža njegujući visok stepen akademskih, ljudskih i institucionalnih vrijednosti, oslanjajući se na sopstvene resurse. Težimo najvišem kvalitetu nastave, podizanju standarda studiranja, razvoju naučno-istraživačkog rada, razvoju i primjeni nastavnih planova i programa prema Bolonjskim principima i zahtjevima tržišta rada, osiguranju kvaliteta i podizanju moralnih vrijednosti kod svakog pojedinca, kako studenta, tako i nastavnika. Dvojne BiH-SLO diplome, naučna znanja i stručne vještine, te edukacija u oblasti priznatih industrijskih certifikata, koje naši studenti stiču na Visokoj školi računarstva i poslovnih komunikacija eMPIRICA omogućava im da zaposlenje biraju u Bosni i Hercegovini, zemljama regiona, kao i zemljama Evropske Unije i širom svijeta.<br><br>
        87% naših diplomiran studenata je svoje prvo zaposlenje u struci pronašlo u roku od 3 mjeseca od diplomiranja, značajan broj njih se zaposlilo u IT firmama u kojima su boravili tokom praktičnog obrazovanja u VI. semestru studija, a također značajan broj njih radi za strane IT kompanije.
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
      return this.$gettext('Početna')
    },
    ogDescription () {
      return this.$gettext('Visoka škola računarstva i poslovnih komunikacija eMPIRICA u Brčkom i Tuzli predstavlja modernu obrazovnu i naučnu instituciju, koja permanentno radi na razvoju prestižnog imidža njegujući visok stepen akademskih, ljudskih i institucionalnih vrijednosti.')
    },
    ogImage () {
      return 'https://eczavrsni.website/static/social/' + this.$i18n.activeLocale + '/home.jpg'
    },
    ogUrl () {
      return 'https://eczavrsni.website' + this.$route.fullPath
    }
  }
}
</script>
