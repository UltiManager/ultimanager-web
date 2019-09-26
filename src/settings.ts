export const API_ROOT = (() => {
  const apiRoot = process.env.ULTIMANAGER_API_ROOT;

  if (!apiRoot) {
    throw new Error(
      "The 'ULTIMANAGER_API_ROOT' environment variable must be defined."
    );
  }

  return apiRoot;
})();
