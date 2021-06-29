export const generateTypes = type => ({
  request: `${type}_REQUEST`,
  success: `${type}_SUCCESS`,
  failure: `${type}_FAILURE`,
})
