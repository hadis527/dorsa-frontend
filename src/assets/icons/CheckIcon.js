import React from "react";

const CheckIcon = (props) => {
  return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21.511"
          height="21.511"
          viewBox="0 0 21.511 21.511"
        >
          <path
            fill="none"
            stroke={props.fill}
            strokeWidth="1.5"
            d="M1.148 7.368a8.346 8.346 0 016.22-6.22 14.837 14.837 0 016.777 0 8.346 8.346 0 016.219 6.22 14.838 14.838 0 010 6.777 8.346 8.346 0 01-6.219 6.219 14.838 14.838 0 01-6.777 0 8.346 8.346 0 01-6.22-6.219 14.837 14.837 0 010-6.777z"
            data-name="Path 36"
          ></path>
          <path
            fill={props.fill}
            stroke={props.fill}
            strokeWidth="1.5"
            d="M5.956 9.062a4.173 4.173 0 013.106-3.106 7.419 7.419 0 013.388 0 4.173 4.173 0 013.11 3.11 7.419 7.419 0 010 3.388 4.173 4.173 0 01-3.11 3.11 7.419 7.419 0 01-3.388 0 4.173 4.173 0 01-3.106-3.114 7.419 7.419 0 010-3.388z"
            data-name="Path 36"
          ></path>
          <path
            fill={props.fill}
            d="M10.756 6.282c2.761 0 5 1.712 5 4.474a5 5 0 01-5 5c-2.761 0-4.5-2.054-4.466-5s1.704-4.474 4.466-4.474z"
            data-name="Path 38"
          ></path>
        </svg>
  );
}
CheckIcon.defaultProps = {
  fill : "#5fcc79"
};
export default CheckIcon;
