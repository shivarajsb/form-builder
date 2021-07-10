import React from 'react'
import PropTypes from 'prop-types'

import withToolbar from '../../../utils/hoc/withToolbar'
import Divider from '../../atoms/divider'

const DividerModule = ({ handleAction, data }) => {
  const { id, label } = data
  const DividerToolbar = withToolbar(Divider, 'divider', label)
  return (
    <div>
      <DividerToolbar id={id} handleAction={handleAction} />
    </div>
  )
}

DividerModule.propTypes = {
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
