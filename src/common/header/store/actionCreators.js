import * as constants from './actionTypes';
import { fromJS } from "immutable";
import axios from 'axios';




//----------------------------------
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
});

//----------------------------------
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

//-----------------------------------
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

//-------------------------------------
export const changePage = (page) => ({
   type:constants.CHANGE_PAGE,
    page
});
export const changeDropDow= (dropped)=> ({
    type:constants.CHANGE_DROPDOWN,
    dropped

});
//派发异步请求
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            console.log(data);
            dispatch(changeList(data.data));

        }).catch(() => {
            console.log('error');
        })

    }
};

