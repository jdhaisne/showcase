<template>
  <div
    class="timeline"
    :class="{ 'timeline--horizontal': horizontal }"
    :style="{
      '--scrollbar-primary-color': scrollbarColor.primary,
      '--scrollbar-secondary-color': scrollbarColor.secondary,
    }"
  >
    <div
      class="timeline__event"
      :class="{ 'timeline__event--horizontal': horizontal }"
      :style="{
        '--icon-primary-color': event.secondaryColor,
        '--icon-secondary-color': event.primaryColor,
      }"
      v-for="event in events"
      :key="event"
    >
      <div
        class="timeline__event__icon"
        :class="{ 'timeline__event__icon--horizontal': horizontal }"
        :style="{ 'background-color': event.primaryColor }"
      >
        <i></i>
        <div
          class="timeline__event__date"
          :style="{ color: event.secondaryColor }"
        >
          {{ event.timespan }}
        </div>
      </div>
      <!-- <div
        class="timeline__event__content"
        :class="{ 'timeline__event__content--horizontal': horizontal }"
      > -->
      <div class="timeline__event__content">
        <h4 class="timeline__event__title">
          {{ event.eventTitle }}
        </h4>
        <div
          class="timeline__event__description"
          :class="{ 'timeline__event__description--horizontal': horizontal }"
          v-for="content in event.contents"
          :key="content"
        >
          <h4>{{ content.title }}</h4>
          <ul v-for="item in content.items" :key="item">
            <li>{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="timeline__line__wrapper">
      <div
        v-for="(eventline, index) in events"
        :key="eventline"
        class="timeline__line"
        :id="`line_${index}`"
        :style="lineStyles[index]"
      ></div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { utils } from "../js/utils";
export default {
  name: "Timeline",
  props: {
    events: {
      type: Array,
      required: true,
    },
    scrollbarColor: {
      type: Object,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const divs = document.getElementsByClassName("timeline__event");
    const timeline = null;
    const lineStyles = ref([]);
    const thickness = 2;
    const leftOffset = -3; //rem
    const bottomOffset = 3; //rem

    function getOffset(el) {
      var rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight,
      };
    }

    function drawLine(
      div1,
      div2,
      color,
      thickness,
      leftOffset,
      bottomOffset = 0,
      horizontal = false
    ) {
      var off1 = getOffset(div1);
      var off2 = getOffset(div2);
      if (!horizontal) {
        //middle left
        var x1 = off1.left + leftOffset;
        var y1 = off1.top + off1.height / 2;

        //top right
        var x2 = off2.left + leftOffset;
        var y2 = off2.top + off2.height / 2;
      } else {
        //middle bottom div 1
        var x1 = off1.left + off1.width / 2;
        var y1 = off1.top + off1.height + bottomOffset;

        //middle bottom div 2
        var x2 = off2.left + off2.width / 2;
        var y2 = off2.top + off2.height + bottomOffset;
      }

      //distance
      var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

      //center
      var cx = (x1 + x2) / 2 - length / 2;
      var cy = (y1 + y2) / 2 - thickness / 2;
      // angle
      var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

      // make hr
      return {
        height: thickness + "px",
        backgroundColor: color,
        left: cx + "px",
        top: cy + "px",
        width: length + "px",
        "-moz-transform": `rotate(${angle}deg)`,
        "-webkit-transform": `rotate(${angle}deg)`,
        "-o-transform": `rotate(${angle}deg)`,
        "-ms-transform": `rotate(${angle}deg)`,
        transform: `rotate(${angle}deg)`,
      };
    }

    function reDrawLine() {
      for (let i = 0; i < divs.length - 1; i++) {
        lineStyles.value[i] = drawLine(
          divs[i],
          divs[i + 1],
          props.events[i].primaryColor,
          thickness,
          utils().rem(leftOffset),
          utils().rem(bottomOffset),
          props.horizontal
        );
      }
    }

    return {
      divs,
      thickness,
      leftOffset,
      bottomOffset,
      drawLine,
      reDrawLine,
      lineStyles,
      timeline,
      utils,
    };
  },
  mounted() {
    this.timeline = document.querySelector(".timeline");
    for (let i = 0; i < this.divs.length - 1; i++) {
      this.lineStyles.push(
        this.drawLine(
          this.divs[i],
          this.divs[i + 1],
          this.events[i].primaryColor,
          this.thickness,
          this.utils().rem(this.leftOffset),
          this.utils().rem(this.bottomOffset),
          this.horizontal
        )
      );
    }
    window.addEventListener("resize", this.reDrawLine);
    this.timeline.addEventListener("scroll", this.reDrawLine);
  },

  unmounted() {
    window.removeEventListener("resize", this.reDrawLine);
    this.timeline.removeEventListener("scroll", this.reDrawLine);
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 5% auto;
  &--horizontal {
    flex-direction: row;
    margin: 0 auto;
    padding: 5%;
    width: 100%;
    max-height: 100vh;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-primary-color)
      var(--scrollbar-secondary-color);
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background: var(--scrollbar-secondary-color);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-primary-color);
      border-radius: 20px;
      border: 3px solid var(--scrollbar-secondary-color);
    }
  }

  &__event {
    margin-bottom: 20px;
    background: #fff;
    position: relative;
    margin: 20px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);

    &__title {
      font-size: 1.5em;
      line-height: 1.4;
      text-transform: uppercase;
      font-weight: 600;
      color: #9251ac;
      letter-spacing: 1.5px;
    }

    &__content {
      flex: 4;
      padding: 20px;
      // &--horizontal {
      //   display: flex;
      // }
    }

    &__date {
      color: #f6a4ec;
      font-size: 1.5rem;
      font-weight: 600;
      white-space: nowrap;
    }
    &__icon {
      flex: 1;
      border-radius: 8px 0 0 8px;
      background: #9251ac;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: #9251ac;
      padding: 20px;
      &--horizontal {
        border-radius: 0 0 8px 8px;
      }
      i {
        position: absolute;
        top: 50%;
        left: -65px;
        font-size: 2.5rem;
      }
    }

    &__description {
      flex-basis: 60%;
      &--horizontal {
        display: flex;
        flex-direction: column;
      }
    }

    &:before {
      content: "";
      width: 1rem;
      height: 1rem;
      background: var(--icon-primary-color);
      border-radius: 100%;
      position: absolute;
      left: -3.5rem;
      bottom: 50%;
      // transform: translateY(-50%);
      border: 2px solid var(--icon-secondary-color);
      z-index: 1;
    }

    &:last-child {
      &:after {
        content: none;
      }
    }
    &--horizontal {
      flex-direction: column-reverse;
      margin: 20px;
      min-width: 300px;
      max-width: 500px;
      &:before {
        left: 50%;
        bottom: -3.5rem;
      }
    }
  }
  &__line {
    padding: 0px;
    z-index: 0;
    margin: 0px;
    line-height: 1px;
    position: absolute;
  }
}
</style>
