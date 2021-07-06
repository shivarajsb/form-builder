import React, { useState } from 'react'
import styled from 'styled-components'

import { formData } from '../../../utils/data/mockData'
import Button from '../../atoms/button'
import Modal from '../../atoms/modal'
import Typography from '../../atoms/typography'
import CreateFormModal from '../../molecules/CreateFormModal'
import FormElements from '../../organisms/FormElements'
import Sidebar from '../../organisms/Sidebar'

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
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalActions = action => {
    setModalOpen(action === 'open')
  }
  const handleFormSubmit = e => {
    handleModalActions('close')
  }
  return (
    <GridParent>
      <SidebarContainer>
        <Sidebar handleCreateForm={() => handleModalActions('open')} formList={formData} />
      </SidebarContainer>
      <HeaderContainer>
        <Typography fontSize="l" bold textAlign="center">
          Drop and Create
        </Typography>
      </HeaderContainer>
      <BuilderContainer>
        <FormElements />
      </BuilderContainer>
      <FooterContainer>
        <Button>Save</Button>
      </FooterContainer>
      <Modal open={modalOpen} handleClose={() => handleModalActions('close')}>
        {modalOpen && <CreateFormModal onSubmit={handleFormSubmit} />}
      </Modal>
    </GridParent>
  )
}
export default FormBuilder
