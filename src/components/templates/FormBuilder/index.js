import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'

import Button from '../../atoms/button'
import Modal from '../../atoms/modal'
import Typography from '../../atoms/typography'
import CreateFormModal from '../../molecules/CreateFormModal'
import FormElements from '../../organisms/FormElements'
import Sidebar from '../../organisms/Sidebar'
import {
  createForm,
  deleteForm,
  getForms as getFormsAction,
  selectForm,
  saveForm,
} from '../../redux-utils/actions/form.actions'
import { getCurrentForm, getForms } from '../../redux-utils/selectors/form.selector'
import { swapComponent } from '../../redux-utils/actions/component.actions'

const GridParent = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
  gridColumnGap: '0px',
  gridRowGap: '0px',
  height: '100vh',
})

const SidebarContainer = styled('div')({
  gridArea: '1/1/7/2',
})
const HeaderContainer = styled('div')({
  gridArea: '1 / 2 / 2 / 7',
  padding: '20px',
})
const BuilderContainer = styled('div')({
  gridArea: '2 / 2 / 7 / 7',
  overflow: 'scroll',
})

const ButtonGroup = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  '>*': {
    marginRight: '20px',
  },
})
const FormBuilder = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const forms = useSelector(getForms)
  const [modalOpen, setModalOpen] = useState(false)
  const currentForm = useSelector(getCurrentForm)
  const handleModalActions = action => {
    setModalOpen(action === 'open')
  }
  const handleFormSubmit = e => {
    dispatch(createForm(e))
    handleModalActions('close')
  }
  const handleClickForm = e => {
    dispatch(selectForm(e))
  }
  const redirectToViewer = () => {
    history.push(`/viewer/${currentForm.id}`)
  }
  const handleDeleteClick = () => {
    const response = confirm('Are you sure you want to Delete the form?')
    if (response) {
      dispatch(deleteForm(currentForm && currentForm.id))
    }
  }
  const handleDropAction = e => {
    dispatch(swapComponent(e))
  }

  const handleSave = () => {
    dispatch(saveForm(currentForm))
  }
  useEffect(() => {
    dispatch(getFormsAction())
  }, [])
  return (
    <GridParent>
      <DragDropContext onDragEnd={handleDropAction}>
        <SidebarContainer>
          <Sidebar
            handleCreateForm={() => handleModalActions('open')}
            formList={forms}
            handleFormClick={handleClickForm}
            currentForm={currentForm}
          />
        </SidebarContainer>
        <HeaderContainer>
          <Typography fontSize="l" bold>
            {currentForm && currentForm.name}
          </Typography>
          <Typography fontSize="l" bold textAlign="center">
            {forms.length && currentForm && 'Drop and Create'}
            {forms.length && !currentForm && 'Please select a from from the sidebar '}
          </Typography>
          <span>
            {currentForm ? (
              <ButtonGroup>
                <Button onClick={handleDeleteClick}>Delete Form</Button>
                <Button onClick={handleSave}>Save</Button>
                <Button onClick={redirectToViewer}>Go to Viewer</Button>
              </ButtonGroup>
            ) : null}
          </span>
        </HeaderContainer>
        {forms.length && currentForm ? (
          <React.Fragment>
            {currentForm ? (
              <React.Fragment>
                <BuilderContainer>
                  <FormElements />
                </BuilderContainer>
              </React.Fragment>
            ) : (
              <Typography>Select a form from the list</Typography>
            )}
          </React.Fragment>
        ) : null}
        <Modal open={modalOpen} handleClose={() => handleModalActions('close')}>
          {modalOpen && <CreateFormModal onSubmit={handleFormSubmit} />}
        </Modal>
      </DragDropContext>
    </GridParent>
  )
}
export default FormBuilder
