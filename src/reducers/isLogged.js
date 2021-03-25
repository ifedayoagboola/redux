const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return !state;
    case "LOGGEDOUT":
      return state;
    default:
      return state;
  }
};
export default loggedReducer;
