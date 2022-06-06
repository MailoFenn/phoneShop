export const generalAction = {
    CART_INC: 'CART_INC'
}

export const pushAddButton = (id) => ({
    type: generalAction.CART_INC,
    id: id
})