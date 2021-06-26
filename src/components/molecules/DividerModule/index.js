import React from 'react'

import withToolbar from '../../../utils/hoc/withToolbar'
import Divider from '../../atoms/divider'
import Typography from '../../atoms/typography'

const mockData = {
  id: 3,
  label: 'Divider (This will not be printed)',
}

const DividerModule = () => {
  const DividerToolbar = withToolbar(Divider)
  const { id, label } = mockData
  return (
    <div>
      <Typography fontSize="m">{label}</Typography>
      <DividerToolbar id={id} />
    </div>
  )
}

export default DividerModule
