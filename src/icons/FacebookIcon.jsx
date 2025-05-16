import React from 'react';

const FacebookIcon = ({
  color = 'rgb(0,0,0)',
  width = '256',
  height = '256',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width={width}
    height={height}
    viewBox="0 0 256 256"
  >
    <g
      style={{
        stroke: 'none',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'none',
        fillRule: 'nonzero',
        opacity: 1,
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 81.475 90 H 8.526 C 3.825 90 0 86.175 0 81.474 V 8.526 C 0 3.825 3.825 0 8.526 0 h 72.949 C 86.176 0 90 3.825 90 8.526 v 72.948 C 90 86.175 86.176 90 81.475 90 z M 8.526 8 C 8.236 8 8 8.236 8 8.526 v 72.948 C 8 81.764 8.236 82 8.526 82 h 72.949 C 81.765 82 82 81.764 82 81.474 V 8.526 C 82 8.236 81.765 8 81.475 8 H 8.526 z"
        style={{ fill: color }}
      />
      <path
        d="M 49.329 70.649 V 47.452 h 6.533 c 1.159 0 2.138 -0.861 2.287 -2.011 l 0.687 -5.328 c 0.178 -1.379 -0.896 -2.6 -2.287 -2.6 h -7.22 v -6.345 c 0 -2.878 0.799 -4.838 4.925 -4.838 l 2.958 -0.001 c 1.273 -0.001 2.305 -1.033 2.305 -2.306 V 19.54 c 0 -1.208 -0.929 -2.214 -2.134 -2.3 c -1.438 -0.102 -3.398 -0.195 -5.535 -0.195 c -7.588 0 -12.783 4.632 -12.783 13.138 v 7.33 h -6.276 c -1.273 0 -2.306 1.032 -2.306 2.306 v 5.328 c 0 1.273 1.032 2.306 2.306 2.306 h 6.276 v 23.197 c 0 1.273 1.032 2.306 2.306 2.306 h 5.652 C 48.296 72.955 49.329 71.922 49.329 70.649 z"
        style={{ fill: color }}
      />
    </g>
  </svg>
);

export default FacebookIcon;
