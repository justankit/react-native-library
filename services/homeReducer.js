const initialState = {
  count: 0,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};

export default homeReducer;
