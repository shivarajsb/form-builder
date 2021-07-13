import { isEmpty } from 'lodash'
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
export const validateData = (components, values, callback) => {
  const errors = {}
  const metaObject = components.map(item => ({ ...item.meta, type: item.type }))
  Object.keys(values).forEach(item => {
    const metadata = filter(metaObject, { name: item })[0]

    if (values[item] === '' && metadata && metadata.required) {
      errors[item] = `${metadata.label} is a required field`
    }
  })
  callback('change')
  if (!isEmpty(errors)) {
    callback('error')
  }
  return errors
}
