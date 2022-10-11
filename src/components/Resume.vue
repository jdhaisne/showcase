<script>
import HeaderBar from "../components/HeaderBar.vue";
import Timeline from "../components/Timeline.vue";
import Skills from "../components/Skills.vue";

export default {
  name: "Resume",
  components: { HeaderBar, Timeline, Skills },
  setup() {
    return {
      // events: ["2019-curent", "2018-2019", "2018-2015", "2015", "2000"],
      events: [
        {
          timespan: "2019-curent",
          color: "#9251ac",
          eventTitle: "",
          contents: [
            {
              titles: "Freelance for Alchemie record",
              items: [
                "Developement of a Vue.js showcase website for a recording studio",
              ],
            },
            {
              titles: "Freelance for OPB-consulting",
              items: [
                "Development of a visualisation tool for displaying links between various agents(hospitals, datacenter, software,...) and creating views to help the decision process and offer a better view of complex systems. Visualisation created using D3.js on an React based environment ",
              ],
            },
          ],
        },
        {
          timespan: "2019-2018",
          color: "red",
          eventTitle: "",
          contents: [
            {
              titles: 'Internship at the "Datalab"',
              items: [
                "Development  of a Python  web application for automatic summary using press aggregate for use in market intelligence. Data collected using web-crawling.",
                "Development of a Python web application for automatic data extraction and classification from car accident reports using OpenVison",
              ],
            },
          ],
        },
        {
          timespan: "2018-2015",
          color: "#9251ac",
          eventTitle: "",
          contents: [
            {
              titles: "Ecole 42",
              items: [
                "C shell development",
                "Mock Instagram application using Node.js with a MySQL database.",
                "Development of  eMarket platform using PHP",
              ],
            },
          ],
        },
        {
          timespan: "2015",
          color: "#9251ac",
          eventTitle: "",
          contents: [
            {
              titles: "Ecole 42",
              items: [
                "C shell development",
                "Mock Instagram application using Node.js with a MySQL database.",
                "Development of  eMarket platform using PHP",
              ],
            },
          ],
        },
        {
          timespan: "2000",
          color: "#9251ac",
          eventTitle: "",
          contents: [
            {
              titles: "Ecole 42",
              items: [
                "C shell development",
                "Mock Instagram application using Node.js with a MySQL database.",
                "Development of  eMarket platform using PHP",
              ],
            },
          ],
        },
      ],

      Skills: ["vue.js", "python", "c++"],
      // eventSlots: ['slot-1996', 'slot-2000', 'slot-2005']
    };
  },
};
</script>

<template>
  <div>
    <!-- <div class="skill__wrapper">
      <Skills :skills="Skills"> </Skills>
    </div> -->

    <Timeline :events="events" horizontal> </Timeline>
  </div>
</template>

<style lang="scss" scoped>
// .resume--wrapper {
//     padding-top: 60px;
//     padding-left: 20px;
//     padding-right: 20px;
// }
// .resume--section-wrapper {
//     display: flex;
//     flex-direction: row;
//     gap: 15px;
// }

// .resume {
//     padding: 5px;
//     list-style-position: inside;
//     &--title {
//         text-align: center;
//     }
//     &--left {
//         align-self: flex-start;
//         position: sticky;
//         top: 10px;
//         flex-grow: 2;
//         width: 30%;
//     }
//     &--right {
//         width: 70%;
//         flex-grow: 6;
//         border-left: 4px solid black;
//     }
//     & * {
//         padding: 5px;
//     }
// }
</style>
