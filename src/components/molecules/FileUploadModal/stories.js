/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'

import FileUploadModal from '.'

storiesOf('Molecules/FileUploadModal', module).add('FileUploadModal', () => (
  <div>
    <FileUploadModal
      handleSubmitForm={e => console.log(e)}
      values={{ label: 'first', name: 'Shivaraj', required: true }}
    />
  </div>
))
