import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";
import {domain, new_project as newProjectApi} from "../../../common/api/api";

const getPages = (page) => ({
    type: constants.GET_MORE_PAGES,
    page: page
});

const changeNewProjectList = (result) => ({
    type: constants.CHANGE_NEW_PROJECT_LIST,
    newProjectList: fromJS(result),
    totalPage: Math.ceil(result.length / 6)

});

const changeNewProjectDetail = (result) => ({
    type: constants.CHANGE_NEW_PROJECT_DETAIL,
    newProjectDetail: fromJS(result.info),
    imageList: fromJS(result.images)

});
const changeNewProjectOverview = (result) => ({
    type: constants.CHANGE_NEW_PROJECT_OVERVIEW,
    newProjectOverview: fromJS(result)
})
export const getNewProject = () => {
    return (dispatch) => {

        axios.get(domain + newProjectApi.list).then((res) => {
                const result = res.data;

                dispatch(changeNewProjectList(result));
            }
        );
    }
};
export const getNewProjectOverview = (id) => {
    return (dispatch) => {
        axios.get(domain + newProjectApi.list + id).then((res) => {
            const result = res.data;
            dispatch(changeNewProjectOverview(result));
        })

    }
}
export const getMorePages = (page) => {
    return (dispatch) => {
        dispatch(getPages(page));
    }
};
export const getNewProjectDetail = (id) => {
    return (dispatch) => {
        axios.get(domain + newProjectApi.detailList + id).then((res) => {
            const result = res.data;
            dispatch(changeNewProjectDetail(result));
        })
    }


}