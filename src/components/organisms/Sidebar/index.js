/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { DragButton } from '../../atoms/button'
import SpaceBetween from '../../atoms/space-between'
import Plus from '../../atoms/svg/plus'
import Typography from '../../atoms/typography'
import ListItem from '../../atoms/list-item'

const ComponentsGroup = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  '>*': {
    margin: '5px',
  },
})

const Wrapper = styled('div')({
  backgroundColor: '#197AFF',
  height: '95vh',
  padding: '20px',
  '>*': {
    marginTop: '40px',
  },
})
const Sidebar = ({ handleCreateForm, formList, handleFormClick }) => (
  <Wrapper>
    <div>
      <SpaceBetween>
        <Typography bold fontSize="m" color="white">
          Forms
        </Typography>
        <span onClick={handleCreateForm}>
          <Plus color="white" />
        </span>
      </SpaceBetween>
      <div style={{ maxHeight: '200px', overflow: 'scroll' }}>
        {formList &&
          formList.map(item => (
            <ListItem label={item.name} key={item.id} id={item.id} onClickItem={handleFormClick} />
          ))}
      </div>
    </div>
    <div>
      <Typography bold fontSize="m" color="white">
        Cell Layout
      </Typography>
      <ComponentsGroup>
        <DragButton dashed variant="primary" type="container">
          Container
        </DragButton>
      </ComponentsGroup>
    </div>
    <div>
      <Typography bold fontSize="m" color="white">
        Form Components
      </Typography>
      <ComponentsGroup>
        <DragButton dashed variant="primary" id="input" type="input">
          Input
        </DragButton>
        <DragButton dashed variant="primary" type="checkbox">
          Checkbox
        </DragButton>
        <DragButton dashed variant="primary" type="upload">
          File Uploader
        </DragButton>
        <DragButton dashed variant="primary" type="text">
          Text
        </DragButton>
        <DragButton dashed variant="primary" type="divider">
          Divider
        </DragButton>
      </ComponentsGroup>
    </div>
  </Wrapper>
)
Sidebar.propTypes = {
  handleCreateForm: PropTypes.func.isRequired,
  formList: PropTypes.arrayOf({
    name: PropTypes.string,
    id: PropTypes.string,
    createdAt: PropTypes.number,
  }).isRequired,
  handleFormClick: PropTypes.func.isRequired,
}

export default Sidebar
