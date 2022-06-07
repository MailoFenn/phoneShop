import sendAPI from "../../api/api";

export const casesAction = {
    GET_CASES: 'GET_CASES'
}

export const getCases = () => {
    return dispatch => {
        sendAPI.getPhone()
            .then((res) => {
                dispatch({
                    type: casesAction.GET_CASES,
                    result: res.data.result
                })
            })
    }
}