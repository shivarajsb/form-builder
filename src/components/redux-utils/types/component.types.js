import { generateTypes } from '../../../utils/helpers'

export default {
  component_create: generateTypes('COMPONENT_CREATE'),
  component_edit: generateTypes('COMPONENT_EDIT'),
  component_delete: generateTypes('COMPONENT_DELETE'),
  component_swap: generateTypes('COMPONENT_SWAP'),
  component_duplicate: generateTypes('COMPONENT_DUPLICATE'),
}
