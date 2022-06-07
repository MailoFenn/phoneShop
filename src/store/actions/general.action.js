export const generalAction = {
    CART_INC: 'CART_INC',
    CART_DEC: 'CART_DEC'
}

export const pushAddButton = () => ({
    type: generalAction.CART_INC
})

export const cartDec = (quantity) => ({
    type: generalAction.CART_DEC,
    quantity: quantity
})

