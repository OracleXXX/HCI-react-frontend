
import { combineReducers } from "redux-immutable";

import { reducer as headerReducer } from '../common/header/store';

import { reducer as homePageReducer } from '../pages/homePage/store'
import { reducer as cLosedProjectReducer } from '../pages/cLosedProject/store'
import { reducer as contactUsReducer } from '../pages/contactUs/store'
import { reducer as newProjectReducer } from '../pages/newProject/store'
import { reducer as newsFeedReducer } from '../pages/newsFeed/store'
import { reducer as platformLoanReducer } from '../pages/platformLoan/store'
import { reducer as ourTeamReducer } from '../pages/ourTeam/store'
//import { reducer as longShortReducer } from '../pages/oneStepService/longShort/store';
//import { reducer as managementReducer } from '../pages/oneStepService/management/store';
import { reducer as activitiesReducer } from '../pages/oneStepService/activities/store';

// redux-immutable
const reducer = combineReducers({
    header: headerReducer,
    homePage: homePageReducer,
    cLosedProject: cLosedProjectReducer,
    contactUs: contactUsReducer,
    newProject: newProjectReducer,
    newsFeed: newsFeedReducer,
    platformLoan: platformLoanReducer,
    ourTeam: ourTeamReducer,
    activities: activitiesReducer

});
export default reducer;
