import styled from "styled-components";
import Row from "../../Kit/Row";
import Col from "../../Kit/Column";


export const DashboardWrapper = styled(Row)`
background:#000;
.sort-container{
    width: 100%;
    justify-content: space-between;
    span{
      padding: 0 20px;
    }
}
.text-container{
  font-size: ${(props) => props.theme.fontSizeLg};
  weight: bold;
  padding-right:20px;
}
`;
export const DashboardContainer = styled(Col)`
 height:100vh;
 width:480px;
 background-color: ${(props) => props.theme.primary};
 position:relative;
 background: ${(props) => props.isOpen ? props.theme.lightGary : "#fff"};

`;
export const HeaderDashboardContainer = styled(Col)`
  width: 100%;
  height: 78px;
  align-items: flex-start;
  background-color: ${(props) => props.theme.primary};
  justify-content: flex-end; 
`;
export const BodyDashboardContainer = styled(Row)`
  height: calc(100% - 78px);
  overflow-y:auto;
  margin: 0 auto;
  align-items:flex-start;
  width: 100%;
`;
export const InfiniteScrollWrapper = styled(Row)`
height: 100%;
min-height: 100%;
overflow-y: scroll;

::-webkit-scrollbar {
  overflow: hidden;
  width: 1px;
}
.InfiniteScroll {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
}
`;
