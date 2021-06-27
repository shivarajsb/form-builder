import React from 'react'
import PropTypes from 'prop-types'

import withToolbar from '../../../utils/hoc/withToolbar'
import Divider from '../../atoms/divider'
import Typography from '../../atoms/typography'

const DividerModule = ({ handleAction, data, type }) => {
  const DividerToolbar = withToolbar(Divider, 'divider')
  const { id, label } = data
  return (
    <div>
      <Typography fontSize="m" bold type={type}>
        {label}
      </Typography>
      <DividerToolbar id={id} handleAction={handleAction} />
    </div>
  )
}

DividerModule.propTypes = {
  type: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
  data: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
}

DividerModule.defaultProps = {
  data: {
    id: 2,
    label: 'Divider',
  },
}
export default DividerModule
