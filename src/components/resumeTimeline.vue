<template>
  <div class="wrapper">
    <div class="background">
      <div class="main-title">Work Experience</div>
      <div v-for="(job, index) in jobs" 
      :key="index" 
      class="job" 
      @click="toggleJob(index)" 
        >
        <div class="title">{{ job.company }}</div>
        <div class="position">{{ job.position }}</div>
        <div  class="time">{{ job.timePeriod }}</div>
            <ul :class="{ 'expanded': expandedIndex === index }"  class="duties">
            <li v-for="(duty, dutyIndex) in job.duties" :key="dutyIndex" class="duty">{{ duty }}</li>
            </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default{
     data() {
        return {
            jobs :[
                {
                    company: 'EXATEL S.A',
                    timePeriod: '2023-TODAY',
                    position: 'IP and ATM Operator',
                    duties: [
                        'Supervision and management of a wide area IP network in Poland and Europe.',
                        'Working with high-end devices like Cisco A9k, Raisecom, Huawei.',
                        'Overseeing and configuring backbone networks and points of contact between operators around the world.',
                        'Supervise and cofigure network transmission, VPN and IP transit services.',
                        'Conducting scheduled work of backbone network software updates. Managing networks for public services including the services and the military',


                    ], 
                },
                {
                    company: 'Intelligent Technologies S.A.',
                    timePeriod: '2022-2023',
                    position: 'Service Desk Operator',
                    duties: [
                        'Overseeing, maintaining and collecting information on failure reports of teletechnical systems, creating service requests.',
                        'Repairing at 1st line support level, and supporting 2nd line operations through service and installation trips.',
                        'Installing services, configuring equipment and maintaining repair records.',
                        'Configuring LAN and WAN networks, managing firewalls, creating rules.',
                        'Configuration of Backbone Network on Cisco devices, using VLAN technologies.',
                        'Technologies related to the creation of wireless computer networks using Ubiquiti devices.',
                        'Designing, configuring and managing Wi-Fi networks, including configuring access points, creating guest networks, managing bandwidth, and monitoring and troubleshooting network performance.'

                    ], 
                },
                {
                    company: 'ART-SYSTEM / Megavision Technology Sp. z o.o.',
                    timePeriod: '2021-2022',
                    position: 'Installer of alarm systems, CCTV, Access control systems',
                    duties: [
                        'Configuration and installation of SATEL alarm systems, Avigilon CCTV monitoring and ROGER access control.',
                        'Basic operation of AutoCad program (Making as-built documentation).',
                        'Self-organization of work.',
                        'Basic configuration of LAN, alarm systems, KD and CCTV systems.',
                        'Installation of LAN wiring for CCTV services of alarm systems and access control.',
                        'Conducting inspections of alarm systems, CCTV, access control.'


                    ], 
                },
            ],
            expandedIndex: 0,
        }
    },
    methods: {
  toggleJob(index) {
    this.expandedIndex = index;

  },
},




}
</script>
<style lang="scss" scoped>
.wrapper{
  
    padding-bottom: 2rem;
    background-image: linear-gradient(to bottom, var(--green2), var(--green1), var(--backgroundLighter));
    width: 100%;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    position: relative;
    .expanded{
          max-height: 500px !important;
        }
    .background{
        width: 65%;
        margin-top: 2rem;
        background-color: rgba(22, 47, 36, 0.6);
        border-radius: 0.2rem;
        position: relative;
        padding-bottom: 4rem;
        overflow: hidden;
        box-shadow: var(--backgroundLighter) 0.1rem 0.1rem 1rem;
        .main-title{
          font-family: "QuickSand";
          color: var(--light);
          width: 100%;
          text-align: center;
          margin-top: 1rem;
          font-size: 3rem;

        }
        .expanded{
          max-height: auto;
        }
        .job{
            color: var(--light);
            font-family: "QuickSand";
            position: relative;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 1.6rem 4rem 1rem 4rem;

            .title{
                font-size: 3rem;
                cursor: pointer;
                font-weight: 800;
            }
            .time{
                font-size: 1rem;
                cursor: pointer;
                padding-bottom: 0.4rem;
                border-bottom: 1px solid var(--light);
            }
            .position{
                font-size: 1.5rem;
                cursor: pointer;
            }
            .duties{
                max-height: 0;
                overflow: hidden;
                cursor: pointer;
                margin: 0;
                transition: max-height 1.3s ease-in-out;
                font-size: 1.4rem;
            .duty{
                font-size: 1.2rem;
            }
        }
        
    }

  }
}
</style>