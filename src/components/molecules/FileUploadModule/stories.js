/* eslint-disable no-console */
import { storiesOf } from '@storybook/react'
import React from 'react'

import FileUploadModule from '.'

storiesOf('Molecules/FileUploadModule', module).add('File Upload Module', () => (
  <div>
    <FileUploadModule
      onChange={e => console.log(e.target.files[0])}
      handleAction={e => console.log(e)}
      data={{ required: true, name: 'file-upload', label: 'File Upload', id: '8' }}
    />
  </div>
))
