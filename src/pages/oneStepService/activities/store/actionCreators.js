import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";
import {domain, activity as activityApi} from "../../../../common/api/api";

const changePage = (page) =>({
    type: constants.CHANGE_PAGE,
    page: page
});

const changeActivityList = (result)=> ({
    type: constants.CHANGE_ACTIVITY,
    activityList: fromJS(result),
    totalPage: Math.ceil(result.length/5)

});
export const changePopIndex = (index) => ({
    type: constants.CHANGE_POP_INDEX,
    index
})
export const updatePage = (page) => {
    return (dispatch) => {
        dispatch(changePage(page))
    }

};
export const getActivity=()=> {
    return (dispatch) => {
        axios.get(domain + activityApi.list).then((res)=> {

            dispatch(changeActivityList(res.data));
            }

        );

    }
}
