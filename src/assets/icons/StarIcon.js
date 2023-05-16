import React from "react";

const StarIcon = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14.145"
    height="14.145"
    data-name="vuesax/linear/star"
    viewBox="0 0 14.145 14.145"
  >
    <path
      fill={props.fill}
      stroke={props.fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.092 2.066L9.13 4.141a1.281 1.281 0 00.837.619l1.881.313c1.2.2 1.486 1.073.619 1.934l-1.462 1.462a1.28 1.28 0 00-.307 1.067l.419 1.81c.33 1.433-.43 1.987-1.7 1.238l-1.761-1.042a1.275 1.275 0 00-1.168 0l-1.763 1.043c-1.262.749-2.028.189-1.7-1.238l.419-1.81a1.28 1.28 0 00-.307-1.067L1.676 7.007c-.861-.861-.584-1.734.619-1.934l1.881-.313a1.284 1.284 0 00.831-.619l1.039-2.075c.566-1.127 1.486-1.127 2.046 0z"
    ></path>
  </svg>
  );
}
StarIcon.defaultProps = {
  fill : "#f1db51"
};
export default StarIcon;
