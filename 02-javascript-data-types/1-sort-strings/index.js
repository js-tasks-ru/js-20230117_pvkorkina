/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let arrCopy = arr.slice();

  return arrCopy.sort((a, b) => {
    let lowerCaseA = a.toLowerCase();
    let lowerCaseB = b.toLowerCase();

    if (lowerCaseA !== lowerCaseB) return param === 'asc' ?
      lowerCaseA.localeCompare(lowerCaseB, 'ru') :
      lowerCaseA.localeCompare(lowerCaseB, 'ru') * -1;
        
    if (a > b) return param === 'asc' ? 1 : -1;
    if (a < b) return param === 'asc' ? -1 : 1; 
  });
}
