import React from "react";

const RightArrowIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12.808"
      height="10.116"
      viewBox="0 0 12.808 10.116"
    >
      <path
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M.75 5.058h11m0 0l-4.588-4m4.588 4l-4.588 4"
        data-name="Arrow - Right"
      ></path>
    </svg>
  );
}
RightArrowIcon.defaultProps = {
  fill : "#858c96"
};
export default RightArrowIcon;
