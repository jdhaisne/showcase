<script>
import HeaderBar from '../components/HeaderBar.vue';
import Timeline from '../components/Timeline.vue';
import Skills from '../components/Skills.vue';

export default {
    name: "Resume",
    components: { HeaderBar, Timeline, Skills },
    setup() {
        
        return {
            events: ['2019-curent', '2018-2019', '2018-2015'],
            Skills: ['vue.js', 'python', 'c++']
            // eventSlots: ['slot-1996', 'slot-2000', 'slot-2005']
        };
    },
};
</script>

<template>
    <div>
        <div class="skill__wrapper">
            <Skills :skills="Skills">

            </Skills>
        </div>
        <div class="timeline__wrapper">
            <Timeline :events="events">

                <template #2019-curent-description>
                    <p>
                        <h4>Freelance for Alchemie record</h4>
                        <ul>
                            <li>Developement of a Vue.js showcase website for a recording studio
                            </li>
                        </ul>
                    </p>
                    <h4>Freelance for OPB-consulting</h4>
                    <p>
                        <ul>
                            <li>Development of a visualisation tool for displaying links between various agents(hospitals, datacenter, software,...) and creating views to help the decision process and offer a better view of complex systems. Visualisation created using D3.js on an React based environment 
                            </li>
                        </ul>
                    </p>
                </template>
                <template #2018-2019-description>
                    <h4>Internship at the "Datalab"</h4>
                    <p>
                        <ul>
                            <li>Development  of a Python  web application for automatic summary using press aggregate for use in market intelligence. Data collected using web-crawling.
                            </li>
                            <li>
                                Development of a Python web application for automatic data extraction and classification from car accident reports using OpenVison
                            </li>
                        </ul>
                    </p>
                </template>
                <template #2018-2015-description>
                    <h4>"Ecole 42":</h4>
                    <p>
                        <ul>
                            <li>C shell development</li>
                            <li>Mock Instagram application using Node.js with a MySQL database.</li>
                            <li>Development of  eMarket platform using PHP</li>
                        </ul>
                    </p>
                </template>
            </Timeline>
        </div>
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