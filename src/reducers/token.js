const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {...state , token: action.payload.token, expiry :action.payload.expiryAt};
        default:
            return state;
    }
}

export default loggedReducer;