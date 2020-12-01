import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";

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
        axios.get('http://52.34.204.235:8080/api/one-step/activities').then((res)=> {

            dispatch(changeActivityList(res.data));
            }

        );

    }
}
