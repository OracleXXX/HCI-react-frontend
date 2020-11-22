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


const changeActivityList = (result)=> ({
    type: constants.CHANGE_ACTIVITY,
    activityList: fromJS(result),
    totalPage: Math.ceil(result.length/5)

})

export const getActivity=()=> {
    return (dispatch) => {
        axios.get('http://localhost:8080/api/one-step/activities').then((res)=> {

            dispatch(changeActivityList(res.data));
            }

        );

    }
}
