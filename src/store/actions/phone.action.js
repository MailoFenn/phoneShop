import sendAPI from "../../api/api";

export const phoneAction = {
    GET_PHONE: 'GET_PHONE'
}

export const getPhone = () => {
    return dispatch => {
        sendAPI.getPhone()
            .then((res) => {
                dispatch({
                    type: phoneAction.GET_PHONE,
                    result: res.data.result
                })
            })
    }
}