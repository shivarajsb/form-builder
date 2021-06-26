import React from 'react'

import withToolbar from '../../../utils/hoc/withToolbar'
import Typography from '../../atoms/typography'

const mockData = {
  id: 2,
  label: 'Hello World this is Shivaraj',
  fontSize: 'm',
  bold: true,
}

const TextModule = () => {
  const { label, fontSize, bold, id } = mockData
  const TypographyWithToolbar = withToolbar(Typography)
  return (
    <div>
      <TypographyWithToolbar fontSize={fontSize} bold={bold} id={id}>
        {label}
      </TypographyWithToolbar>
    </div>
  )
}

export default TextModule
