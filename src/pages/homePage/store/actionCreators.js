import axios from 'axios'
import * as constants from './constants'


const changeHomePageData = (result) => ({
    type: constants.CHANGE_HOMEPAGE_DATA
})


export const getHomePageInfo = () => {
    return (dispatch) => {
        axios.get('api/homePageList.json').then((res) => {
            const result = res.data.data;

            dispatch(changeHomePageData(result));
        })
    }
}