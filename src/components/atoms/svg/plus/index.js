import * as React from 'react'

function Plus(props) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 12H8m4-4v4-4zm0 4v4-4zm0 0h4-4z"
        stroke="#888"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="#888"
        strokeWidth={2}
      />
    </svg>
  )
}

export default Plus
