import React from "react";
import { ContentCardWrapper, CoverContainer, ContentTitle, ContentCardContainer} from "./styles";
import StarIcon from "../../assets/icons/StarIcon";
import Row from "../../Kit/Row";
import StatementHandler from "../../utils/methods/StatementHandler"
const ContentCard = (props) => {
    const { reviewsTitle, reviewsRate, source } = props;

    return (
        
        <ContentCardWrapper>
            <ContentCardContainer>
            <CoverContainer
                coverHeight={250}
                source={source}
                coverWidth={100}
            />
            <ContentTitle>{StatementHandler.StatementSplitter(reviewsTitle,25)}</ContentTitle>
            <Row>
                <StarIcon />
                <span className="rate-container">{reviewsRate}</span>
            </Row>
            </ContentCardContainer>
        </ContentCardWrapper>
    )
}
export default ContentCard