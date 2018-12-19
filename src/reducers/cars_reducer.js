function carsReducer(state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case "SET_CARS":
      return action.payload;
      break;
    case "SET_CAR":
      return [action.payload];
      break;
    default:
      return state;
  }
}

export default carsReducer;
