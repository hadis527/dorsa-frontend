import React from "react";
import { ContentCardWrapper, CoverContainer, ContentTitle, ContentCardContainer } from "./styles";
import StarIcon from "../../assets/icons/StarIcon";
import Row from "../../kit/Row";
import StatementHandler from "../../utils/methods/StatementHandler";
import PropTypes from 'prop-types';

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
                <ContentTitle>{StatementHandler.StatementSplitter(reviewsTitle, 25)}</ContentTitle>
                <Row>
                    <StarIcon />
                    <span className="rate-container">{reviewsRate}</span>
                </Row>
            </ContentCardContainer>
        </ContentCardWrapper>
    )
}
ContentCard.propTypes = {
    reviewsTitle: PropTypes.string,
    reviewsRate: PropTypes.string,
    source: PropTypes.string,
};
export default ContentCard