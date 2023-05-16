import React, { useEffect, useState, useRef } from "react"
import Axios from "axios";
import ContentCard from "../../shared/contentCard";
import {
    DashboardWrapper,
    DashboardContainer,
    InfiniteScrollWrapper,
    HeaderDashboardContainer,
    BodyDashboardContainer
} from "./styles";
import InfiniteScroll from "react-infinite-scroller";
import SortIcon from "../../assets/icons/SortIcon";
import ToggleCard from "../../shared/toggleCard";
import useOutsideClick from "../../utils/methods/OutSideClickHandler";
import Row from "../../kit/Row";
const { REACT_APP_API_URL } = process.env;

const Dashboard = () => {
    const toggleRef = useRef();
    const [fields, setFields] = useState({
        list: [],
        hasMoreResult: false,
        pageNum: 1,
        isOpen: false,
        selectedItem: []
    })

    const sortListOptions = [
        { label: "بیشترین امتیاز", value: "rate" },
        { label: "بیشترین بازدید", value: "view" },
        { label: "جدیدترین", value: "newest" },
    ]

    useEffect(() => {
        getData(fields.selectedItem);
    }, [fields.selectedItem]);

    const loadMore = () => {
        getData();
    };
    const onToggle = () => {
        setFields({ ...fields, isOpen: !fields.isOpen });
    }
    useOutsideClick(toggleRef, () => {
        setFields({ ...fields, isOpen: false });
    });
    const onChange = (value) => {
        setFields({
            ...fields,
            selectedItem: value,
            list: [],
            pageNum: 1,
            isOpen: false,
        }, () => {
        });
    }

    const getData = (sortItem) => {
        Axios({
            method: 'get',
            url: `${REACT_APP_API_URL}/wp-json/api/v2/reviews-category/animations`,
            params: { page: fields.pageNum, sortby: sortItem },
            headers: {
                Authorization: `Bearer`,
                "content-type": "application/json",
            },
        }).then(res => {
            setFields({
                ...fields,
                list: [...fields.list, ...res.data.data],
                hasMoreResult: res.data.max_num_pages > fields.pageNum ? true : false,
                pageNum: fields.pageNum + 1
            })
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <DashboardWrapper>
            <DashboardContainer isOpen={fields.isOpen}>
                <HeaderDashboardContainer ref={toggleRef}>
                    <Row className="text-container">چیارو ببینه؟</Row>
                    <Row className="sort-container">
                        <span>مناسب برای 3 تا 7 سال</span>
                        <span onClick={() => { onToggle(); }}>
                            <SortIcon />
                        </span>
                    </Row>
                </HeaderDashboardContainer>
                <BodyDashboardContainer>
                    {fields.list.length > 0 ?
                        <InfiniteScrollWrapper>
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={(e) => loadMore(e)}
                                hasMore={fields.hasMoreResult}
                                loader={
                                    <div style={{ textAlign: "center" }}>
                                        لطفا چند لحظه صبر کنید
                                    </div>
                                }
                                className="InfiniteScroll"
                                initialLoad={false}
                                useWindow={false}
                                threshold={250}
                            >
                                {fields.list.map((_, index) => {
                                    return (
                                        <ContentCard
                                            key={index}
                                            lg={12}
                                            reviewsTitle={_.reviewsTitle}
                                            reviewsRate={_.reviewsRate}
                                            source={_.reviewsThumbnailUrl}
                                        />
                                    )
                                })}
                            </InfiniteScroll>
                        </InfiniteScrollWrapper> : <div className="loader"></div>}
                </BodyDashboardContainer>
                <ToggleCard
                    isOpen={fields.isOpen}
                    onToggle={onToggle}
                    sortListOptions={sortListOptions}
                    selectedItem={fields.selectedItem}
                    onChange={onChange}
                />
            </DashboardContainer>
        </DashboardWrapper>
    )
}
export default Dashboard