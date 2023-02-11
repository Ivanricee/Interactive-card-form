import React from 'react'

export function CardLogo({ className }) {
  return (
    <i className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="84"
        height="47"
        viewBox="28 0 74 74"
        fill="none"
      >
        <ellipse
          cx="23.478"
          cy="23.5"
          fill="#fff"
          rx="23.478"
          ry="23.5"
        ></ellipse>
        <path
          stroke="#fff"
          d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075z"
        ></path>
      </svg>
    </i>
  )
}

export function Complete({ className }) {
  return (
    <i className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="none"
      >
        <circle cx="40" cy="40" r="40" fill="url(#a)"></circle>
        <path stroke="#fff" strokeWidth="3" d="M28 39.92L36.08 48l16-16"></path>
        <defs>
          <linearGradient
            id="a"
            x1="-23.014"
            x2="0"
            y1="11.507"
            y2="91.507"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6348FE"></stop>
            <stop offset="1" stopColor="#610595"></stop>
          </linearGradient>
        </defs>
      </svg>
    </i>
  )
}
