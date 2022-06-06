const initialState = {
    products: [
        {coast: "19990", title: 'Xiaomi Redmi Note 5', id: 0},
        {coast: "89990", title: 'IPhone 12', id: 1}
    ]
}

const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default phoneReducer;