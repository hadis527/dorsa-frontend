import styled from "styled-components";
import Col from "../../Kit/Column";
import Row from "../../Kit/Row";

export const ContentCardWrapper = styled(Row)`
  width : 200px;
  min-height:250px;
  padding:10px;
  .rate-container{
    padding-right:10px;
  }
`;
export const ContentCardContainer =styled(Col)`
justify-content :flex-start;
align-items: flex-start;
width: 100%;
`;
export const CoverContainer = styled(Row)`
  background: url(${(props) => props.source});
  background-size: cover;
  background-repeat: no-repeat;
  height: ${(props) => `${props.coverHeight || 240}px`};
  width: ${(props) => `${props.coverWidth}%` || "100%"};
  border-radius: ${(props) => props.theme.borderRadius};
  align-items: flex-start;

};
`;
export const ContentTitle = styled(Row)`
font-size: ${(props) => props.theme.fontSizeSm};
color:${(props) => props.theme.text};

`;