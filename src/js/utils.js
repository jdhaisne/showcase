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
  return { removeClasses, addClasses };
}
