import { storiesOf } from '@storybook/react'
import React from 'react'

import InputModal from '.'

const handleSubmit = e => {
  // eslint-disable-next-line no-console
  console.log(e)
}

storiesOf('Molecules/ModalContent', module)
  .add('With Blank', () => <InputModal handleSubmitForm={handleSubmit} />)
  .add('With Values ', () => (
    <InputModal
      values={{ name: 'Shivaraj Bakale', label: 'hello' }}
      handleSubmitForm={handleSubmit}
    />
  ))
