import { createSelector } from 'reselect'

const getFormsBase = state => state.forms

/* Memoized selector creators */
const getFormState = createSelector([getFormsBase], state => state)

/* Get Forms */
export const getForms = createSelector([getFormState], state => state.forms)
/* Get current Form */
export const getCurrentForm = createSelector([getFormState], state => state.currentForm)
/* Get Form By ID */
export const getFormById = id =>
  createSelector([getForms], state => state.filter(item => item.id === id)[0])
