import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";
import {domain, news_feed} from "../../../common/api/api";

const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page: page
})

export const updatePage = (page) => {
    return (dispatch) => {
        dispatch(changePage(page))
    }

};

const changeNewsFeedList = (result) => ({
    type: constants.CHANGE_NEWS_FEED_LIST,
    newsFeedList: fromJS(result.data.news),
    totalPage: Math.ceil((result.length - 3) / 5)

});

const changeDetailList = (result) => ({
    type: constants.CHANGE_DETAIL_LIST,
    detailList: fromJS(result.data),
    //popularArticleTitles: fromJS(result.popularArticleTitles)
})
export const getNewsFeed = () => {
    return (dispatch) => {
        axios.get('https://api.homecapus.com/api/news').then((res) => {

            dispatch(changeNewsFeedList(res.data))

        })
        /*axios.get(domain + news_feed.list).then((res) => {
                const result = res.data;

                dispatch(changeNewsFeedList(result));
            }
        );*/
    }
};
export const getDetailList = (id) => {
    return (dispatch) => {
        axios.get('https://api.homecapus.com/api/news/' + id).then((res) => {
            const result = res.data;
            console.log(res.data)
            dispatch(changeDetailList(result));
        })
    }
}
