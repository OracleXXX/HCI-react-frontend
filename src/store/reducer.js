
import { combineReducers } from "redux-immutable";

import { reducer as headerReducer } from '../common/header/store';

import { reducer as homePageReducer } from '../pages/homePage/store'
// redux-immutable
const reducer = combineReducers({
    header: headerReducer,

    homePage: homePageReducer

});
export default reducer;
