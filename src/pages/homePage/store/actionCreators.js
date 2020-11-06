import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";

const changeHomePageData = (result) =>({
    type: constants.CHANGE_HOMEPAGE_DATA,
    newProjectList: result.newProjectList
})


/*const getProjectList = (list) => ({
    type: constants.GET_PROJECT_LIST,
    list: fromJS(list)
})*/

export const getHomePageInfo = () => {
    return (dispatch) => {
        axios.get('api/newProject.json').then((res) => {
            const result = res.data.data;
            // console.log(result);
            dispatch(changeHomePageData(result));
        })
    }
}