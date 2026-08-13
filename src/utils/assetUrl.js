/**
 * Dynamically computes failproof asset URLs for subpath deployments (GitHub Pages) and root domains.
 * @param {string} relativePath - Path like "assets/still.jpg" or "/assets/still.jpg"
 * @returns {string} Fully qualified pathname like "/fridae-presave/assets/still.jpg"
 */
export function getAssetUrl(relativePath) {
  const cleanPath = relativePath.replace(/^\//, '');
  let basePath = window.location.pathname;
  
  // If pathname ends with index.html, strip it
  if (basePath.endsWith('index.html')) {
    basePath = basePath.slice(0, -10);
  }
  
  if (!basePath.endsWith('/')) {
    basePath += '/';
  }
  
  return basePath + cleanPath;
}
