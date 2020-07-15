
const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADER':
      return action.payload;
    default:
      return state;
  }
};

export default loaderReducer;
