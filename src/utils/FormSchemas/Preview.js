import filter from 'lodash/filter'
import pickBy from 'lodash/pickBy'
/**
 *
 * @param {Array} components
 * @returns
 */
export const getInitialValues = components =>
  pickBy(
    components.reduce((a, { meta }) => ({ ...a, [meta.name]: '' }), {}),
    (value, key) => key !== 'undefined'
  )
export const validateData = (components, values) => {
  const errors = {}
  const metaObject = components.map(item => item.meta)
  Object.keys(values).forEach(item => {
    const metadata = filter(metaObject, { name: item })[0]
    if (values[item] === '' && metadata && metadata.required) {
      errors[item] = `${metadata.label} is a required field`
    }
  })
  return errors
}
