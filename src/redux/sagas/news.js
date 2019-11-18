import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* fetchNews(action) {
    yield put(actions.fetchNewsStart());

    const startUrl = 'https://newsapi.org/v2/top-headlines';
    const country = 'ru';
    const apikey = '131595506e1e4017aeaddc953c9bcd5d';
    const url = `${startUrl}?country=${country}&apiKey=${apikey}`;

    try {
        const res = yield fetch(url);

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const news = yield res.json();

        yield put(actions.fetchNewsSuccess(news.articles));
    } catch (err) {
        yield put(actions.fetchNewsFail(err));
    }
}
