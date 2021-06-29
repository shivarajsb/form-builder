import { createSelector } from 'reselect'

const getForms = state => state.forms

/* Memoized selector creators */
const getFormState = createSelector([getForms], state => state)

/* Get Forms */
export const getFormsElements = createSelector([getFormState], state => state.forms)
