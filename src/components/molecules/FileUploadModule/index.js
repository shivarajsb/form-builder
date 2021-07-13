/* eslint-disable react/forbid-prop-types */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withToolbar from '../../../utils/hoc/withToolbar'
import Input from '../../atoms/Input'
import Typography from '../../atoms/typography'

const FileUploadBase = styled(Input).attrs({ type: 'file' })({})

export const FileUpload = ({ label, value, ...others }) => (
  <div>
    <Typography>{label}</Typography>
    <FileUploadBase value={value ? null : ''} {...others} />
  </div>
)
FileUpload.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

const FileUploadModule = ({ handleAction, data }) => {
  const { label, required, name, id } = data
  const FileUploadWithToolbar = withToolbar(FileUploadBase, 'file-upload', label)
  return (
    <div>
      <FileUploadWithToolbar handleAction={handleAction} name={name} required={required} id={id} />
    </div>
  )
}

FileUploadModule.propTypes = {
  handleAction: PropTypes.func.isRequired,
  data: PropTypes.any.isRequired,
}

export default FileUploadModule
