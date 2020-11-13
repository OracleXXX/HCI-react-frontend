import axios from 'axios'
import * as constants from './constants'
import {fromJS} from "immutable";



export const changePage = (page) => ({
   type:constants.CHANGE_PAGE,
    page
});
const changeNewProjectList = (result)=> ({
    type: constants.CHANGE_NEW_PROJECT_LIST,
    newProjectList: result.newProjectList

})

export const getNewProject = ()=> {
    return (dispatch) => {
        axios.get('/api/newProjectList.json').then((res)=> {
            const result =res.data.data;
            dispatch(changeNewProjectList(result));
            }

        );

    }
}
