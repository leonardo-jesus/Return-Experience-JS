/**
 * This functions returns a label based on range config object
 * @param {Number} target target value 
 * @param {Object} range range object
 * @param {String} defaultValue default value
 * @returns {String} label
 */
function getLabelByTargetInRange(target, range, defaultValue) { 
  for(let rule in range) {
    if(target <= rule) {
      return range[rule];
    }
  }
  return defaultValue;
}

// TEST
(() => {
  const range = {
    "1": "Starter",
    "3": "Intermediate",
    "6": "Advanced"
  };

  console.log(getLabelByTargetInRange(1, range, 'Jedi Master'));
  console.log(getLabelByTargetInRange(3, range, 'Jedi Master'));
  console.log(getLabelByTargetInRange(6, range, 'Jedi Master'));
  console.log(getLabelByTargetInRange(8, range, 'Jedi Master'));
})();


