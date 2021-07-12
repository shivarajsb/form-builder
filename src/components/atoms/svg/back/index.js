import * as React from 'react'

function Back(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 11H7.83l4.88-4.88a1.008 1.008 0 00-.324-1.636.995.995 0 00-1.086.216l-6.59 6.59a.996.996 0 000 1.41l6.59 6.59a.997.997 0 001.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
        fill="#888"
      />
    </svg>
  )
}

export default Back
