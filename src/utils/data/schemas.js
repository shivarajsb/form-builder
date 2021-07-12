import { v4 } from 'uuid'

const inputSchema = {
  label: 'Input',
  name: 'input',
  required: false,
  min: 100,
  max: 100,
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
  name: 'checkbox',
  label: 'Checkbox Label',
  required: false,
}
const containerSchema = {
  flex: false,
}
const schemas = {
  input: inputSchema,
  text: textSchema,
  divider: dividerSchema,
  checkbox: checkboxSchema,
  container: containerSchema,
}

export const generateSchema = type => ({ type, id: v4(), meta: { ...schemas[type] } })
