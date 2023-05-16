import styled from "styled-components";
const getWidthString = (span) => {
  if (span) {
    let width = (span / 24) * 100;
    return `width: ${width}%;`;
  }
};
const Row = styled.div`
    display  : flex ;
    direction : rtl;
    justify-content : center;
    align-items : center;
    ${(props) => getWidthString(props.xl)}
    @media screen and (max-width: 1280px) {
        ${(props) => getWidthString(props.lg)}
    } 
    @media screen and (max-width: 992px) {
        ${(props) => getWidthString(props.md)}
    } 
    @media  screen and (max-width: 768px) {
        ${(props) => getWidthString(props.sm)}
    }
    @media  screen and (max-width: 480px) {
        ${(props) => getWidthString(props.xs)}
    }`;

export default Row;
