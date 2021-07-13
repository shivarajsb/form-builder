import { v4 } from 'uuid'

const generateID = () => v4().split('-')[3]

const inputSchema = {
  label: 'Input',
  name: `input`,
  required: false,
  placeholder: 'Enter Input',
}

const textSchema = {
  label: 'Text',
  fontSize: 'm',
  bold: true,
}
const dividerSchema = {
  label: 'Divider',
}
const checkboxSchema = {
  name: `checkbox`,
  label: 'Checkbox Label',
  required: false,
}
const containerSchema = {
  flex: false,
}
const uploadSchema = {
  name: `upload`,
  label: 'Upload',
  requried: false,
}
const schemas = {
  input: inputSchema,
  text: textSchema,
  divider: dividerSchema,
  checkbox: checkboxSchema,
  container: containerSchema,
  upload: uploadSchema,
}

const getMeta = type => {
  const id = generateID()
  const schema = schemas[type]
  if (schema.name) {
    return { ...schemas[type], name: `${schema.name}_${id}` }
  }

  return { ...schemas[type] }
}
export const generateSchema = type => ({ type, id: v4(), meta: getMeta(type) })
