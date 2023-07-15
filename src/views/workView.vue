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
        <div class="work-cont">
          <div class="work-title">{{ panel.title }}</div>
          <div class="inner-work-desc" v-if="expandedIndex === index" :class="'inner-work-desc-' + index">
            <div class="company" >{{ panel.description.company }}</div>
            <div class="job-desc" >{{ panel.description.jobDesc }}</div>
            <div class="job-desc" >Zakres moich obowiązków:</div>
            <ul class="job-desc-sec">
              <li v-for="point in panel.description.jobDescSec" :key="point">{{ point }}</li>
            </ul>
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
            jobDesc: 'Jestem technikiem systemów teletechnicznych u operatora, zajmującym się nadzorem, utrzymaniem i gromadzeniem informacji dotyczących zgłoszeń awarii. ',
            jobDescSec: [
            'Nadzorowanie, utrzymanie i gromadzenie informacji dotyczących zgłoszeń awarii w systemach teletechnicznych.',
            'Instalacja usług, konfiguracja urządzeń oraz prowadzenie dokumentacji naprawczej.',
            'Konfiguracja sieci LAN i WAN, zarządzanie firewallami, tworzenie reguł QoS i konfiguracja tuneli VPN z wykorzystaniem urządzeń MikroTik.',
            'Technologie związane z tworzeniem bezprzewodowych sieci komputerowych z urządzeniami Ubiquiti.',
            'Projektowanie, konfiguracja i zarządzanie sieciami Wi-Fi, w tym ustawianie punktów dostępu, tworzenie sieci gościnnych, zarządzanie pasmem oraz monitorowanie i rozwiązywanie problemów związanych z wydajnością sieci.',
            'Prowadzenie dokumentacji naprawczej, w tym zgłoszenia awarii, opisy podjętych działań naprawczych oraz tworzenie instrukcji obsługi i konfiguracji dla klientów.'
            ],
          }
        },
        {
          date: '09.2021 - 07.2022',
          title: 'Instalator systemów alarmowych, CCTV, Kontroli dostępu',
          description:{
            company: 'Megavision Technology Sp. z o.o.',
            jobDesc: 'Specjalista ds. systemów alarmowych, monitoringu CCTV oraz kontroli dostępowej.',
            jobDescSec: [
            'Instalacja oprzewodowania LAN pod usługi CCTV systemów alarmowych oraz kondtroli dostępu.',
            'Przeprowadzanie przeglądów instalacji alarmowych, CCTV, kontroli dostępu',
            'Konfigurowanie systemów alarmowych SATEL, monitoringu CCTV Avigilon oraz kontroli dostępu ROGER.',
            'Nadzorowanie pracami instalacyjnymi, rozprowadzaniem instalacji światłowodowych, miedzianych.',
            'Prowadzenie dokumnetacji powykonawczej dla klientów biznesowych związanych z instalacjami.',
            'Naprawy systemów alarmowych, CCTV kontroli dostępu.'
            ],
          }
        },
      ],
    };
  },
  methods: {
    calculateExpandedHeight(index) {
      const workCont = document.querySelectorAll('.work-cont')[index];
      if (workCont) {
        const clone = workCont.cloneNode(true);
        clone.style.height = 'auto';
        clone.style.visibility = 'hidden';
        clone.style.position = 'absolute';
        workCont.parentNode.appendChild(clone);
        const height = clone.offsetHeight;
        workCont.parentNode.removeChild(clone);
        return height;
      }
      return 0;
    },
    
    async loadIcon(index) {
      try {
        const iconName = `icon_${index}`;
        const importedModule = await import(`../assets/svg/${iconName}.svg`);
        this.iconSrc.push(importedModule.default); // push the resolved source to the iconSrc array
      } catch (error) {
        console.error(`Failed to load icon for index ${index}:`, error);
      }
    },

    async togglePanel(index) {
      const expanded = document.querySelectorAll('.work-cont')[index];
      const previousExpanded = document.querySelectorAll('.work-cont')[this.expandedIndex];
      
      if (this.expandedIndex === index) {
        // Collapse the clicked panel if it's already expanded
        expanded.style.height = '3em';
        this.expandedIndex = -1;
      } else {
        // Close the previously expanded panel if any
        if (previousExpanded) {
          previousExpanded.style.height = '3em';
        }

        this.expandedIndex = index; // Expand the clicked panel

        await this.$nextTick();
        const height = this.calculateExpandedHeight(index);
        expanded.style.height = height + 'px';

        await this.$nextTick();
        const descElement = document.querySelector(`.inner-work-desc-${index}`);
        if (descElement) {
          descElement.style.opacity = 1;
        }
  }
},
},
  mounted() {
      setTimeout(() => {
          this.togglePanel(0)
      },100)
      for (let i = 0; i < this.panels.length; i++) {
        this.loadIcon(i);
      }
},

}
</script>
<style scoped lang="scss">

  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background-color: var(--backgroundColor);
    font-size: 20px;
    position: relative;
    .title{
      font-size: 2.5em;
      opacity: 0.6;
      height: 100%;
      margin-bottom: 1em;
    }
    .inner-cont{
      width: 100%;
      height: auto;
      display: flex;
      position: relative;
      flex-direction: column;
      gap: 3em;
      .work-panel{
        display: flex;
        justify-content: center;
        height: auto;
        align-items: center;
        gap: 2em;
        width: 100%;
        .left-cont{
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 15em;
          align-self: flex-start;
          gap:1em;
          .date{
          opacity: 0.7;
          white-space: nowrap;
          width: 10rem;
          font-style: italic;
          color: var(--blackColor);
        }
        .work-icon{
          width: 2.5em;
          position: relative;
          // box-shadow: 0 0 1.5em rgb(136, 136, 136);
          height: 2.5em;
          aspect-ratio: 1/1;
          margin-right: 1em;
          border-radius: 50%;
          background-color: var(--cardColor);
          background-image: url('../assets/img/cardboardTexture.jpg');
          background-blend-mode: multiply;
          opacity: 0.7;
          box-sizing: border-box;
          border: 2px white solid;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.7s ease-in-out;

        }          
        }
        .work-cont{
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 1.5em rgb(136, 136, 136);
          color: white;
          letter-spacing: 1px;
          width: 50%;
          justify-content: center;
          align-items: center;
          background-color: var(--cardColor);
          background-image: url('../assets/img/cardboardTexture.jpg');
          background-blend-mode: multiply;
          opacity: 0.7;
          padding: 0.3em;
          height: 3em;
          overflow: hidden;
          transition: all 0.7s ease-in-out;
        .work-title{
          opacity: 0.9;
          border-radius: 0.4em;
          position: relative;
          height: 2em;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 10px 0 10px;
        }
        .inner-work-desc{
          font-size: 0.8em;
          margin-top: 1em;
          height: auto;
          position: relative;
          width: 90%;
          opacity: 0;
          transition: opacity 0.4s;
          }
          .company{
            font-size: 1.4em;
            opacity: 0.9;
            margin-bottom: 0.5em;
          }
          .job-desc{
            opacity: 0.9;

          }
          .job-desc-sec{
            opacity: 0.9;
          }
        }
      }
    }
  }


</style>
