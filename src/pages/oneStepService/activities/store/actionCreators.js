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


const changeActivity = (result)=> ({
    type: constants.CHANGE_ACTIVITY,
    activityList: result.activityList,
    totalPage: Math.ceil(result.activityList.length/5)

})

export const getActivity=()=> {
    return (dispatch) => {
        axios.get('/api/activityList.json').then((res)=> {
            const result =res.data.data;
            dispatch(changeActivity(result));
            }

        );

    }
}
