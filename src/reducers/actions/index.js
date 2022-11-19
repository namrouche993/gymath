export const increment = (payload) => {
    return {
        type : 'INCREMENT',
        payload: payload
    };
}

export const decrement = () => {
    return {
        type : 'DECREMENT'
    };
}