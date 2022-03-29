
export function bgColorReducer(state = "#000000", action){
  switch (action.type) {
    case "BG_COLOR":
      return state = action.payload;
    default:
      return state;
  }
}

export function colorTextReducer(state = "#FFFFFF", action){
  switch (action.type) {
    case "COLOR_TEXT":
      return state = action.payload;
    default:
      return state;
  }
}

export function officeReducer(state= "", action){
  switch (action.type) {
    case "PROFESSION":
      return state = action.payload;
    default:
      return state;
  }
}

export function techReducer(state= "", action){
  switch (action.type) {
    case "GET_TECH":
      return state = action.payload;
    default:
      return state;
  }
}