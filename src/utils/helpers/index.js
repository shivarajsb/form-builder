import { v4 } from 'uuid'

export const generateTypes = type => ({
  request: `${type}_REQUEST`,
  success: `${type}_SUCCESS`,
  failure: `${type}_FAILURE`,
})
export const swapArray = (array, from, to) => {
  const arr = [...array]
  const temp = arr[to]

  arr[to] = arr[from]
  arr[from] = temp
  return arr.filter(i => i)
}

export const duplicateElement = element => ({ ...element, id: v4() })
