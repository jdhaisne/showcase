import { utils } from "../js/utils";

export function useSlider(root) {
  const slider = {
    fullpageSlider: root,
    slides: root.querySelector(".slides"),
    current: root.querySelector(".slider-nav .current"),
    handle: null,
    idle: true,
    activeIndex: 0,
  };
  const start = function () {
    slider.items = slider.slides.querySelectorAll(".slide");
    slider.total = slider.items.length;
  };

  const changeSlide = function (direction) {
    slider.idle = false;
    slider.fullpageSlider.classList.remove("prev", "next");
    if (direction == "next") {
      slider.activeIndex = (slider.activeIndex + 1) % slider.total;
      slider.fullpageSlider.classList.add("next");
    } else {
      slider.activeIndex =
        (slider.activeIndex - 1 + slider.total) % slider.total;
      slider.fullpageSlider.classList.add("prev");
    }

    utils().removeClasses(slider.items, ["prev", "next", "active"]);

    const prevItems = [...slider.items].filter((item) => {
      let prevIndex;
      prevIndex = slider.activeIndex - 1;
      if (slider.activeIndex == 0) {
        prevIndex = slider.total - 1;
      }
      return item.dataset.index == prevIndex;
    });

    const nextItems = [...slider.items].filter((item) => {
      let nextIndex;
      nextIndex = slider.activeIndex + 1;
      if (slider.activeIndex == slider.total - 1) {
        nextIndex = 0;
      }
      return item.dataset.index == nextIndex;
    });
    // const prevItems = [...slider.items].filter((item) => {
    //   let prevIndex;

    //   if (slider.fullpageSlider.classList.contains("prev")) {
    //     prevIndex =
    //       slider.activeIndex == slider.total - 1
    //         ? slider.total - 2
    //         : slider.activeIndex - 1;
    //   } else {
    //     prevIndex =
    //       slider.activeIndex == 0 ? slider.total - 1 : slider.activeIndex - 1;
    //   }

    //   return item.dataset.index == prevIndex;
    // });
    // const nextItems = [...slider.items].filter((item) => {
    //   let nextIndex;

    //   if (slider.fullpageSlider.classList.contains("next")) {
    //     nextIndex =
    //       slider.activeIndex == slider.total - 1 ? 0 : slider.activeIndex + 1;
    //   } else {
    //     nextIndex = slider.activeIndex == 0 ? 1 : slider.activeIndex + 1;
    //   }

    //   return item.dataset.index == nextIndex;
    // });
    const activeItems = [...slider.items].filter((item) => {
      return item.dataset.index == slider.activeIndex;
    });

    utils().addClasses(prevItems, ["prev"]);
    utils().addClasses(nextItems, ["next"]);
    utils().addClasses(activeItems, ["active"]);
  };

  return { slider, start, changeSlide };
}
