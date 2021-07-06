import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Typography from '../typography'

const ListItemBase = styled('div')({
  padding: '15px',
  cursor: 'pointer',
  backgroundColor: ({ selected }) => (selected ? '#ffffff' : '#197AFF'),
  transition: '0.2s',
  ':hover': {
    filter: 'contrast(0.8)',
    transition: '0.3s',
  },
})

const ListItem = ({ label, onClickItem, id, selected, ...others }) => (
  <ListItemBase {...others} onClick={() => onClickItem(id)} selected={selected}>
    <Typography color={selected ? '#197AFF' : 'white'}>{label}</Typography>
  </ListItemBase>
)
ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickItem: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}
export default ListItem
