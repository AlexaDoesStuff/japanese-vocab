/**
 * Clears the entire dom plus event handlers when navigating between pages.
 * @return {Event}
 */

export function clearAllFromRoot(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
