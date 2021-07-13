import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import withHover from '../../../utils/hoc/withHover'
import Delete from '../../atoms/svg/delete'
import Duplicate from '../../atoms/svg/duplicate'
import Edit from '../../atoms/svg/edit'

const ToolbarBase = styled('div')({
  flexDirection: 'row',
  backgroundColor: '#f8f8f8',
  borderRadius: '30px',
  border: '2px solid #e8e8e8',
  display: 'inline-block',
  padding: '10px 10px 5px 10px',
})

const Toolbar = ({ onEdit, onDelete, onDuplicate }) => {
  const tools = [
    { component: Edit, fn: onEdit },
    { component: Delete, fn: onDelete },
    { component: Duplicate, fn: onDuplicate },
  ].map(({ component, fn }) => withHover(component, fn))

  return (
    <ToolbarBase>
      {tools.map(Item => {
        const key = v4()
        return (
          <span key={key} id={key}>
            <Item />
          </span>
        )
      })}
    </ToolbarBase>
  )
}

Toolbar.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDuplicate: PropTypes.func.isRequired,
}

export default Toolbar
