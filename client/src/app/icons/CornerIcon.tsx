import React, { SVGAttributes } from 'react'

const CornerIcon: React.FC<SVGAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg width="9" height="20" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
          fill="#FFf"
          filter="url(#messageAppendix)"
        ></path>
        <path
          d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
          fill="FFF"
        ></path>
      </g>
    </svg>
  )
}

export default CornerIcon
