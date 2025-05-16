const LocationArrowIcon = ({ width = 256, height = 256, color = 'black' }) => (
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
        d="M 26.731 55.583 L 1.142 45.289 c -1.682 -0.677 -1.459 -3.168 0.362 -4.041 L 87.116 0.205 c 1.71 -0.82 3.499 0.969 2.679 2.679 L 48.752 88.496 c -0.873 1.821 -3.364 2.044 -4.041 0.362 L 34.417 63.269 C 33.009 59.767 30.233 56.991 26.731 55.583 z"
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: color,
          fillRule: 'nonzero',
          opacity: 1,
        }}
      />
    </g>
  </svg>
);

export default LocationArrowIcon;
