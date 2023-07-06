<template>
  <div class="cont">
    <div class="title">Historia zatrudnienia</div>
    <div class="inner-cont">
      <div
        class="work-panel"
        v-for="(panel, index) in panels"
        :key="index"
        :id="index + 1"
        @click="togglePanel(index)"
      >
        <div class="left-cont">
          <div class="work-icon">
            <img :src="iconSrc[index]" class="icon-svg" />
          </div>
          <div class="date">{{ panel.date }}</div>
        </div>
        <div class="work-cont" :class="{ expanded: expandedIndex === index }" :style="{ height: expandedIndex === index ? getHeight(panel.description) : '3em' }">
          <div class="work-title">{{ panel.title }}</div>
          <div class="inner-work-desc"  v-if="expandedIndex === index " >
            <div class="company-name" >{{ panel.description.company }}</div>
            <div class="company-desc" >{{ panel.description.jobDesc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedIndex: -1, // initially no panel is expanded
      iconSrc: [],
      panels: [
        {
          date: '07.2022 - Obecnie',
          title: 'Technik sieci telekomunikacyjnych',
          description:{
            company: 'Intelligent Technologies S.A.',
            jobDesc: 'Jestem odpowiedzialny za nadzorowanie, utrzymanie i gromadzenie informacji dotyczących zgłoszeń awarii w systemach teletechnicznych. Moje obowiązki obejmują instalację usług, konfigurację urządzeń oraz prowadzenie dokumentacji naprawczej. Pracując z urządzeniami Cisco, MikroTik i Ubiquiti, zdobyłem szeroką wiedzę z zakresu sieci komputerowych. Z urządzeniami Cisco zapoznałem się z zaawansowanymi funkcjami sieciowymi, takimi jak routowanie, przełączanie, zarządzanie bezpieczeństwem sieci oraz konfiguracja protokołów, takich jak OSPF, EIGRP, BGP i VLAN. Dzięki temu mogę skutecznie zarządzać sieciami i rozwiązywać problemy związane z konfiguracją i awariami. Praca z urządzeniami MikroTik umożliwiła mi rozwinięcie umiejętności w zakresie konfiguracji sieciowych na poziomie LAN i WAN. Zdobytym doświadczeniem obejmuje konfigurację routerów, zarządzanie firewallami, tworzenie reguł QoS oraz konfigurację tuneli VPN. Praca z urządzeniami Ubiquiti pozwoliła mi poznać technologie związane z tworzeniem bezprzewodowych sieci komputerowych. Mam umiejętności w projektowaniu, konfiguracji i zarządzaniu sieciami Wi-Fi, w tym ustawianie punktów dostępu, tworzenie sieci gościnnych, zarządzanie pasmem oraz monitorowanie i rozwiązywanie problemów związanych z wydajnością sieci. Prowadzenie dokumentacji naprawczej stanowi istotną część mojej pracy. Dokumentuję zgłoszenia awarii, opisuję podjęte działania naprawcze oraz tworzę instrukcje obsługi i konfiguracji dla klientów. ',
          }
        },
        {
          date: '09.2021 - 07.2022',
          title: 'Instalator sieci teleinformatycznych',
          description:{
            company: 'Intelligent Technologies S.A.',
            jobDesc: 'Jestem odpowiedzialny za nadzorowanie, utrzymanie i gromadzenie informacji dotyczących zgłoszeń awarii w systemach teletechnicznych. Moje obowiązki obejmują instalację usług, konfigurację urządzeń oraz prowadzenie dokumentacji naprawczej. Pracując z urządzeniami Cisco, MikroTik i Ubiquiti, zdobyłem szeroką wiedzę z zakresu sieci komputerowych. Z urządzeniami Cisco zapoznałem się z zaawansowanymi funkcjami sieciowymi, takimi jak routowanie, przełączanie, zarządzanie bezpieczeństwem sieci oraz konfiguracja protokołów, takich jak OSPF, EIGRP, BGP i VLAN. Dzięki temu mogę skutecznie zarządzać sieciami i rozwiązywać problemy związane z konfiguracją i awariami. Praca z urządzeniami MikroTik umożliwiła mi rozwinięcie umiejętności w zakresie konfiguracji sieciowych na poziomie LAN i WAN. Zdobytym doświadczeniem obejmuje konfigurację routerów, zarządzanie firewallami, tworzenie reguł QoS oraz konfigurację tuneli VPN. Praca z urządzeniami Ubiquiti pozwoliła mi poznać technologie związane z tworzeniem bezprzewodowych sieci komputerowych. Mam umiejętności w projektowaniu, konfiguracji i zarządzaniu sieciami Wi-Fi, w tym ustawianie punktów dostępu, tworzenie sieci gościnnych, zarządzanie pasmem oraz monitorowanie i rozwiązywanie problemów związanych z wydajnością sieci. Prowadzenie dokumentacji naprawczej stanowi istotną część mojej pracy. Dokumentuję zgłoszenia awarii, opisuję podjęte działania naprawcze oraz tworzę instrukcje obsługi i konfiguracji dla klientów. ',
          }
        },
      ],
    };
  },
  methods: {
    async loadIcon(index) {
      try {
        const iconName = `icon_${index}`;
        const importedModule = await import(`../assets/svg/${iconName}.svg`);
        this.iconSrc.push(importedModule.default); // push the resolved source to the iconSrc array
      } catch (error) {
        console.error(`Failed to load icon for index ${index}:`, error);
      }
    },

    togglePanel(index) {
    if (this.expandedIndex === index) {
      this.expandedIndex = -1; // Collapse the clicked panel if it's already expanded
    } else {
      this.expandedIndex = index; // Expand the clicked panel

      // Close the previously expanded panel immediately
      this.$nextTick(() => {
        this.expandedIndex = -1; // Close the previously expanded panel
        this.$nextTick(() => {
          this.expandedIndex = index; // Re-expand the clicked panel
          setTimeout(() => {
          const descElement = document.querySelector('.inner-work-desc');
          if (descElement) {
            descElement.style.opacity = 1;
          }
        }, 500);
        });
      });
    }
  },
  getHeight(description) {
    const dummyElement = document.createElement('div');
    dummyElement.classList.add('work-cont');
    dummyElement.style.position = 'absolute';
    dummyElement.style.visibility = 'hidden';
    dummyElement.style.width = '50%';
    dummyElement.style.fontSize = window.getComputedStyle(this.$el).fontSize;
    dummyElement.style.lineHeight = window.getComputedStyle(this.$el).lineHeight;
    dummyElement.innerHTML = `
      <div class="work-title"></div>
      <div class="inner-work-desc">
        <div class="company-name">${description.company}</div>
        <div class="company-desc">${description.jobDesc}</div>
      </div>
    `;

    document.body.appendChild(dummyElement);
    const height = dummyElement.offsetHeight;
    document.body.removeChild(dummyElement);

    return `${height}px`;
  }
},
  async mounted() {
      setTimeout(() => {
          this.togglePanel(0)
      },100)
      for (let i = 0; i < this.panels.length; i++) {
        this.loadIcon(i);
      }
}

}
</script>
<style scoped lang="scss">

  .cont {

    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--backgroundColor);
    padding-left: 150px;
    font-size: 20px;
    align-items: center;
    position: relative;
    flex-direction: column;
    .title{
      font-size: 2.5em;
      opacity: 0.6;
      height: 100%;
      align-self: flex-start;
    }
    .inner-cont{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 3em;
      .work-panel{
        display: flex;
        gap: 2em;
        width: 100%;
        align-items: center;
        .left-cont{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10em;
          align-self: flex-start;
          height: 100%;
          gap:1em;
          .date{
          opacity: 0.7;
          white-space: nowrap;
          height: 100%;

          font-style: italic;
          color: var(--blackColor);
        }
        .work-icon{
          width: 2.5em;
          align-self: flex-start;
          height: 2.5em;
          aspect-ratio: 1/1;
          border-radius: 50%;
          margin: 1em 0em 1em 0em;
          background-color: var(--cardColor);
          background-image: url('../assets/img/cardboardTexture.jpg');
          background-blend-mode: multiply;
          opacity: 0.7;
          border: 2px white solid;
          display: flex;
          justify-content: center;
          align-items: center;
        }          
        }

        .work-cont{
          display: flex;
          position: relative;
          flex-direction: column;
          color: white;
          overflow: hidden;
          letter-spacing: 1px;
          width: 50%;
          justify-content: center;
          align-items: center;
          background-color: var(--cardColor);
          background-image: url('../assets/img/cardboardTexture.jpg');
          background-blend-mode: multiply;
          opacity: 0.7;
          padding: 20px 40px 20px 40px;
          height: 3em;
          transition: height 0.7s ease-in-out;
        .work-title{
          opacity: 0.9;
          border-radius: 0.4em;
          position: relative;
          height: 2em;
          display: flex;
          align-items: center;
          font-size: 2rem;
          justify-content: center;
          padding: 0 10px 0 10px;
        }
        &.expanded {
            height: auto;
          }

        .inner-work-desc{
          font-size: 0.8em;
          margin-top: 1em;
          opacity: 0;
          transition: opacity 0.4s;
          }
          .company-name{
            font-size: 1.4em;
          }
          .company-desc{

            padding-bottom: 1em;
          }
        }
      }
    }
  }


</style>
