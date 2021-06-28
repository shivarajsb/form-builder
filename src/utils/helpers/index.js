export const generateTypes = type => ({
  request: `${type}_request`,
  success: `${type}_success`,
  failure: `${type}_failure`,
})
