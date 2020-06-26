const initialStatePin = {
  postPinned: [],
};

const pinnedReducer = (state = initialStatePin, action) => {
  switch (action.type) {
    case 'FETCH_PINNED':
      return {
        state,
        postPinned: action.postPinned,
      };
    default:
      return state;
  }
};

export default pinnedReducer;
