export const userInitialState = {
  name: "JOEL"
}

export const userReducer = (state = userInitialState, action) => {
  switch(action.type) {
    case "CHANGE_USER_NAME":
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
