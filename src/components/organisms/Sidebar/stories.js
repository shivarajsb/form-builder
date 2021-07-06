import { storiesOf } from '@storybook/react'
import React from 'react'

import { formData } from '../../../utils/data/mockData'

import Sidebar from '.'

storiesOf('Organisms/Sidebar', module).add('Sidebar', () => <Sidebar formList={formData} />)
