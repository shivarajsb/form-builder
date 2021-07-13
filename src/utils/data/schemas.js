import { v4 } from 'uuid'

const inputSchema = {
  label: 'Input',
  name: 'input',
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
  name: 'checkbox',
  label: 'Checkbox Label',
  required: false,
}
const containerSchema = {
  flex: false,
}
const uploadSchema = {
  name: 'upload',
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

export const generateSchema = type => ({ type, id: v4(), meta: { ...schemas[type] } })
