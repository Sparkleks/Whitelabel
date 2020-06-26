const initialState = {
  postdata: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        state,
        postdata: action.postdata,
      };
    default:
      return state;
  }
};

export default postReducer;
