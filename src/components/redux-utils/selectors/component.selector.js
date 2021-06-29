import { createSelector } from 'reselect'
/* Store Selectors */

const getComponents = state => state.components
/* Memoized selector creators */
const getComponentsState = createSelector([getComponents], state => state)

export const getComponentElements = createSelector([getComponentsState], state => state.components)
export const getComponentById = id =>
  createSelector([getComponentElements], state => {
    const items = state.filter(i => i.id === id)
    return items && items.length ? items[0] : []
  })
