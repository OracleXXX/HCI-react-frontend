import * as constants from './actionTypes';
import { fromJS } from "immutable";
import axios from 'axios';




//----------------------------------

export const changeDropDow= (dropped)=> ({
    type:constants.CHANGE_DROPDOWN,
    dropped

});
//派发异步请求
/*export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            console.log(data);
            dispatch(changeList(data.data));

        }).catch(() => {
            console.log('error');
        })

    }
};*/

