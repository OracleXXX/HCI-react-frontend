import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";

const changePage = (page) =>({
    type: constants.CHANGE_PAGE,
    page: page
})

export const updatePage = (page) => {
    return (dispatch) => {
        dispatch(changePage(page))
    }

};

const changeNewsFeedList = (result)=> ({
    type: constants.CHANGE_NEWS_FEED_LIST,
    newsFeedList: fromJS(result.newsFeedList),
    totalPage: Math.ceil((result.newsFeedList.length-3)/5)

});

export const getNewsFeed=()=> {
    return (dispatch) => {
        axios.get('/api/newsFeedList.json').then((res)=> {
            const result =res.data.data;

            dispatch(changeNewsFeedList(result));
            }

        );

    }
}
