const searchReducer = (state = "", action) => {
  switch (action.type) {
    case 'SET_PARAM':
      return state = action.payload;
    default:
      return state;
  }
}

export default searchReducer;