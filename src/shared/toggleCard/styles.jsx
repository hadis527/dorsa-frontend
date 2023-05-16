import styled from "styled-components";
import Col from "../../kit/Column";
import Row from "../../kit/Row";

export const ToggleWrapper = styled.div`
.toggle-menu {
  dispaly:flex;
  height: 150px;
  width: 100%;
  position: absolute;
  right: 0;
  top: -150px;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: .3s ease all;
  transition: .3s ease all;
  background: #fff;
  &.open {
    -webkit-transform: translateY(150px);
    transform: translateY(150px);
  }
  border-radius: 0 0 20px 20px;
}
`;
export const ToggleContainer = styled(Col)`
  align-items: flex-start;
  padding:0 20px
`;
export const TttleContainer = styled(Row)`
font-size: ${(props) => props.theme.fontSizeMd};
color:${(props) => props.theme.text};
font-weight: bold;
`;

