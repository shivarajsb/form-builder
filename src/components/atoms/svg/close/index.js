import * as React from 'react'
import styled from 'styled-components'

const Path = styled('path')({
  stroke: '#B7B7B7',
})

function Close(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 4L4 20m16 0L4 4l16 16z" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

export default Close
