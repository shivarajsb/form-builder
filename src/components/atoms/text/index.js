import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../typography'

const Text = ({ label, ...others }) => <Typography {...others}>{label}</Typography>

Text.propTypes = {
  label: PropTypes.string.isRequired,
}
export default Text
