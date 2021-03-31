import * as actions from "./actions";

const initialState = {
    projectsList: [],
    tableInfo: {},
    columns: []
};

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actions.FETCH_API:
            return {
                projectsList: payload.projectsList,
                tableInfo: payload.tableInfo,
                columns: payload.columns 
            }
        default:
            return state 
    }
}
