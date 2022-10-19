export function utils() {
  /**
   * Removes Classes from NodeList
   * @param {NodeList} nodeList The node list to remove classes from
   * @param {Array} cssClasses Array of CSS classes to be removed
   */
  function removeClasses(nodeList, cssClasses) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove(...cssClasses);
    }
  }

  /**
   * Adds Classes from NodeList
   * @param {NodeList} nodeList The node list to add classes to
   * @param {Array} cssClasses Array of CSS classes to be added
   */
  function addClasses(nodeList, cssClasses) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add(...cssClasses);
    }
  }

  /**
   * convert vh to px
   * @param {Number} v vh value
   * @returns vh in px
   */
  function vh(v) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (v * h) / 100;
  }

  /**
   * convert vw to px
   * @param {Number} v vw value
   * @returns vw in px
   */
  function vw(v) {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    return (v * w) / 100;
  }

  /**
   * convert rem to px
   * @param {Number} rem rem value
   * @returns rem in px
   */
  function rem(rem) {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }
  return { removeClasses, addClasses, vh, vw, rem };
}
