export const API_ROOT = (() => {
  // If the API root starts with $, it hasn't been replaced yet.
  const apiRoot = CONFIG.ULTIMANAGER_API_ROOT.startsWith("$")
    ? process.env.ULTIMANAGER_API_ROOT
    : CONFIG.ULTIMANAGER_API_ROOT;

  if (!apiRoot) {
    throw new Error(
      "The 'ULTIMANAGER_API_ROOT' environment variable must be defined."
    );
  }

  return apiRoot;
})();
