import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";

const getPages = (page)=>({
    type: constants.GET_MORE_PAGES,
    page: page
});

const changeNewProjectList = (result)=> ({
    type: constants.CHANGE_NEW_PROJECT_LIST,
    newProjectList: fromJS(result),
    totalPage: Math.ceil(result.length/6)

});

export const getNewProject = ()=> {
    return (dispatch) => {

        axios.get(constants.PROXY_URL+'api/new-project').then((res)=> {
            const result =res.data;

            dispatch(changeNewProjectList(result));
            }
        );
    }
};
export const getMorePages = (page) => {
    return (dispatch) => {
        dispatch(getPages(page));
    }
};
