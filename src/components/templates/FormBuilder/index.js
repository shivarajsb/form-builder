import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Button from '../../atoms/button'
import Modal from '../../atoms/modal'
import Typography from '../../atoms/typography'
import CreateFormModal from '../../molecules/CreateFormModal'
import FormElements from '../../organisms/FormElements'
import Sidebar from '../../organisms/Sidebar'
import { createForm, selectForm } from '../../redux-utils/actions/form.actions'
import { getCurrentForm, getForms } from '../../redux-utils/selectors/form.selector'

const GridParent = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  gridColumnGap: '0px',
  gridRowGap: '0px',
  height: '100vh',
})

const SidebarContainer = styled('div')({
  gridArea: '1/1/6/2',
})
const HeaderContainer = styled('div')({
  gridArea: '1 / 2 / 2 / 6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const BuilderContainer = styled('div')({
  gridArea: '2 / 2 / 5 / 6',
  overflow: 'scroll',
})

const FooterContainer = styled('div')({
  gridArea: '5 / 2 / 6 / 6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const FormBuilder = () => {
  const dispatch = useDispatch()
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
  return (
    <GridParent>
      <SidebarContainer>
        <Sidebar
          handleCreateForm={() => handleModalActions('open')}
          formList={forms}
          handleFormClick={handleClickForm}
          currentForm={currentForm}
        />
      </SidebarContainer>
      <HeaderContainer>
        <Typography fontSize="l" bold textAlign="center">
          {forms.length ? 'Drop and Create' : 'No Forms present. Create a form'}
        </Typography>
      </HeaderContainer>
      {forms.length ? (
        <React.Fragment>
          <BuilderContainer>
            <FormElements />
          </BuilderContainer>
          <FooterContainer>
            <Button>Save</Button>
          </FooterContainer>
        </React.Fragment>
      ) : null}
      <Modal open={modalOpen} handleClose={() => handleModalActions('close')}>
        {modalOpen && <CreateFormModal onSubmit={handleFormSubmit} />}
      </Modal>
    </GridParent>
  )
}
export default FormBuilder
