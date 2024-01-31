import React from 'react'
import { IconButton } from "@material-tailwind/react";

const BackToHome = () => {
  return (
    <IconButton
    variant="text"
    color="gray"
    size="md"
    className=" rounded-full "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="#999999"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  </IconButton>
  )
}

export default BackToHome