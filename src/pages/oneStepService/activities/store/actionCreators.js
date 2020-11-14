import axios from 'axios'
import * as constants from './constants'



const changeActivity = (result)=> ({
    type: constants.CHANGE_ACTIVITY,
    activityList: result.activityList

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
