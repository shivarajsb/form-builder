export const data = [
  {
    id: '123',
    type: 'container',
    meta: {
      displayType: 'flex',
      childElements: [
        {
          position: 1,
          type: 'input',
          meta: {
            id: 1,
            label: 'Hello World',
            name: 'name',
            required: true,
            min: 4,
            max: 100,
            placeholder: 'Whats up Dork?',
          },
        },
      ],
    },
  },
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
      min: 4,
      max: 100,
      placeholder: 'Enter your name',
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
export const formData = [
  {
    id: '123',
    name: 'First Form',
    createdAt: 1625597818,
  },
  {
    id: '345',
    name: 'First Form',
    createdAt: 1594061818,
  },
  {
    id: '567',
    name: 'First Form',
    createdAt: 1594061819,
  },
]
