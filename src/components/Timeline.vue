<template>
  <div class="timeline">
    <div class="timeline__event" v-for="event in events" :key="event">
      <div class="timeline__event__icon">
        <i></i>
        <div class="timeline__event__date">
          <slot :name="`${event}-date`">{{ event }}</slot>
        </div>
      </div>
      <div class="timeline__event__content">
        <h4 class="timeline__event__title">
          <slot :name="`${event}-title`"></slot>
        </h4>
        <div class="timeline__event__description">
          <slot :name="`${event}-description`"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Timeline",
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const divs = document.getElementsByClassName("timeline__event");
    const thickness = 2;
    const leftOffset = -41.5;
    function getOffset(el) {
      var rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        width: rect.width || el.offsetWidth,
        height: rect.height || el.offsetHeight,
      };
    }

    function drawLine(div1, div2, color, thickness, leftOffset) {
      console.log(div1, div2);
      var off1 = getOffset(div1);
      var off2 = getOffset(div2);

      //middle left
      var x1 = off1.left + leftOffset;
      var y1 = off1.top + off1.height / 2;

      //top right
      var x2 = off2.left + leftOffset;
      var y2 = off2.top + off2.height / 2;

      //distance
      var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

      //center
      var cx = (x1 + x2) / 2 - length / 2;
      var cy = (y1 + y2) / 2 - thickness / 2;

      // angle
      var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
      // make hr
      var htmlLine =
        "<div class='htmlline' style='padding:0px; z-index: 0; margin:0px; height:" +
        thickness +
        "px; background-color:" +
        color +
        "; line-height:1px; position:absolute; left:" +
        cx +
        "px; top:" +
        cy +
        "px; width:" +
        length +
        "px; -moz-transform:rotate(" +
        angle +
        "deg); -webkit-transform:rotate(" +
        angle +
        "deg); -o-transform:rotate(" +
        angle +
        "deg); -ms-transform:rotate(" +
        angle +
        "deg); transform:rotate(" +
        angle +
        "deg);' />";
      document.body.innerHTML += htmlLine;
    }

    function reDrawLine() {
      const line = document.getElementsByClassName("htmlline");
      line[0].remove();
      drawLine(divs[0], divs[2], "#9251ac", thickness, leftOffset);
    }

    return {
      divs,
      thickness,
      leftOffset,
      drawLine,
      reDrawLine,
    };
  },
  mounted() {
    console.log(this.divs);
    this.drawLine(
      this.divs[0],
      this.divs[2],
      "#9251ac",
      this.thickness,
      this.leftOffset
    );
    //this.drawLine(this.divs[1], this.divs[2], '#9251ac', this.thickness, this.leftOffset);
    window.addEventListener("resize", this.reDrawLine);
  },

  unmounted() {
    window.removeEventListener("resize", this.reDrawLine);
  },
};
</script>

<style lang="scss" scoped>
.timeline {
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: 5% auto;

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

      i {
        position: absolute;
        top: 50%;
        left: -65px;
        font-size: 2.5rem;
      }
    }

    &__description {
      flex-basis: 60%;
    }

    &:before {
      content: "";
      width: 1rem;
      height: 1rem;
      position: absolute;
      background: #f6a4ec;
      border-radius: 100%;
      left: -50px;
      top: 48%;
      // transform: translateY(-50%);
      border: 2px solid #9251ac;
      z-index: 1;
    }

    &:last-child {
      &:after {
        content: none;
      }
    }
  }
}
</style>
