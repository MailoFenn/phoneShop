import sendAPI from "../../api/api";

export const headphonesAction = {
    GET_HEADPHONES: 'GET_HEADPHONES'
}

export const getHeadphones = () => {
    return dispatch => {
        sendAPI.getHeadphones()
            .then((res) => {
                dispatch({
                    type: headphonesAction.GET_HEADPHONES,
                    result: res.data.result
                })
            })
    }
}