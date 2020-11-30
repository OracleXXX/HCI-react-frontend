import {fromJS} from "immutable";

const defaultState = fromJS({
    additionInfoList: [
        ["Not Real Property", "UCC Foreclosure Process"],
        ["&lt;3 Months to foreclose", "Nonjudicial Proceeding"],
        ["Interest in Real Property", "18-24 Months to Foreclose"],
        ["Judicial Proceeding", "Moratorium"]
    ]


});


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}