export const data = [
  {
    type: 'text',
    id: '1',
    meta: {
      label: 'Text',
      name: 'text',
      fontSize: 'm',
      bold: true,
    },
  },
  {
    type: 'input',
    id: '2',
    meta: {
      label: 'Name',
      name: 'name',
      required: true,
      placeholder: 'Enter your name',
    },
  },
  {
    type: 'upload',
    id: '8',
    meta: {
      label: 'File Upload',
      name: 'file-upload',
      required: true,
      placeholder: '',
    },
  },
  {
    type: 'input',
    id: '5',
    meta: {
      label: 'Name',
      name: 'name',
      required: true,
      min: 4,
      max: 100,
      placeholder: 'Enter your Email',
    },
  },
  {
    type: 'divider',
    id: '3',
    meta: {
      label: 'Divider',
    },
  },
]
