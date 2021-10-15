const INPUT_TEXT = "INPUT_TEXT"
const ADD_TEXT = "ADD_TEXT"

const initialState = {
  text: "",
  add_text: []
};

const myCounters = (state = initialState , action) => {
  switch (action.type) {
    case INPUT_TEXT: {
      return {
        ...state,
        text: action.typeText
      };
    }
    case ADD_TEXT: {
      return {
        ...state,
        add_text: [...state.add_text, action.buttonClick],
      };
    }
    default:
      return state;
  }
}
export function inputNewTextFunc(typeText){
  return { type: INPUT_TEXT, typeText };
}
export function addInputText( buttonClick) {
  return { type: ADD_TEXT, buttonClick};
}


export default myCounters