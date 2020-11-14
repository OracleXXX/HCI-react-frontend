import axios from 'axios'
import * as constants from './constants'

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
    newsFeedList: result.topicList,
    totalPage: Math.ceil(result.topicList.length/1)

});

export const getNewsFeed=()=> {
    return (dispatch) => {
        console.log("asd")
        axios.get('/api/newsFeedList.json').then((res)=> {
            const result =res.data.data;

            dispatch(changeNewsFeedList(result));
            }

        );

    }
}
