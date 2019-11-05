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

export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsStart());

        const startUrl = 'https://newsapi.org/v2/top-headlines?';
        const country = 'country=ru&';
        const apikey = 'apiKey=131595506e1e4017aeaddc953c9bcd5d';
        const url = startUrl + country + apikey;

        fetch(url)
            .then((res) => res.json())
            .then((news) => {
                console.log('news', news.articles);
                dispatch(fetchNewsSuccess(news.articles));
            })
            .catch((err) => {
                console.log('fetch news data fail', err);
                dispatch(fetchNewsFail(err));
            });
    };
};

export const moreInfoClicked = (newsItem) => ({
    type: actionTypes.MORE_INFO_CLICKED,
    newsItem
});
