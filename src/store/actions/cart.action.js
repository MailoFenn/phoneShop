export const cartAction = {
    ADD_TO_CART: 'ADD_TO_CART'
}

export const addToCart = (product) => ({
    type: cartAction.ADD_TO_CART,
    product: product
})