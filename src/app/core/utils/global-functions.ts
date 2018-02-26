const definedUndefined = 'undefined';

/**
 * Returns true if the given value is undefined or null.
 * @param objToCheck Value to be checked.
 */
export function isBlank(objToCheck) {
  return isUndefined(objToCheck) || objToCheck === null;
}

/**
 * Returns true if the given value is undefined.
 * @param objToCheck Value to be checked.
 */
export function isUndefined(objToCheck) {
  return (typeof (objToCheck) === definedUndefined);
}
