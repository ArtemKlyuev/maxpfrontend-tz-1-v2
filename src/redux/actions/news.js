import * as actionTypes from './actionTypes';

export const fetchNewsStart = () => ({ type: actionTypes.FETCH_NEWS_START });

export const fetchNewsFail = (error) => ({
    type: actionTypes.FETCH_NEWS_FAIL,
    error
});

export const fetchNewsSuccess = (news) => ({
    type: actionTypes.FETCH_NEWS_SUCCESS,
    news
});

export const fetchNews = () => ({type: actionTypes.FETCH_NEWS})

export const moreInfoClicked = (newsItem) => ({
    type: actionTypes.MORE_INFO_CLICKED,
    newsItem
});
