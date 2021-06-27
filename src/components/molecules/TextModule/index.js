import React from 'react'
import PropTypes from 'prop-types'

import withToolbar from '../../../utils/hoc/withToolbar'
import Typography from '../../atoms/typography'

const TextModule = ({ handleAction, data, type }) => {
  const { label, fontSize, bold, id } = data
  const TypographyWithToolbar = withToolbar(Typography, 'text')
  return (
    <div>
      <TypographyWithToolbar
        fontSize={fontSize}
        bold={bold}
        id={id}
        handleAction={handleAction}
        type={type}
      >
        {label}
      </TypographyWithToolbar>
    </div>
  )
}

TextModule.propTypes = {
  type: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  data: PropTypes.objectOf({
    id: PropTypes.number,
    label: PropTypes.string,
    fontSize: PropTypes.oneOf(['m', 'l', 'xl', 's']),
    bold: PropTypes.bool,
  }),
}

TextModule.defaultProps = {
  data: {
    id: 3,
    label: 'Text',
    name: 'text',
    fontSize: 'm',
    bold: true,
  },
}

export default TextModule
