import { nanoid } from "nanoid";

const INPUT_TEXT = "INPUT_TEXT";
const ADD_DONE_TASK = "ADD_DONE_TASK";
const REMOVE_DONE_TASK = "REMOVE_DONE_TASK";

const initialState = {
  text: "",
  arrayOfDoneTasks: [],
};

const myDoingText = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT: {
      return {
        ...state,
        text: action.typeText,
      };
    }
    case ADD_DONE_TASK: {
      return {
        ...state,
        arrayOfDoneTasks: [...state.arrayOfDoneTasks, action.taskWithData],
      };
    }
    case REMOVE_DONE_TASK: {
      return {
        ...state,
        arrayOfDoneTasks: action.filteredArray,
      };
    }
    default:
      return state;
  }
};
export function inputNewTextFunc(typeText) {
  return { type: INPUT_TEXT, typeText };
}
export function addInputTextDone(newTask) {
  const setDate = () => {
    const date = new Date();
    const options = {
      weekday: "short", // long, short, narrow
      day: "numeric", // numeric, 2-digit
      // year: 'numeric', // numeric, 2-digit
      month: "short", // numeric, 2-digit, long, short, narrow
      hour: "numeric", // numeric, 2-digit
      minute: "numeric", // numeric, 2-digit
      // second: 'numeric', // numeric, 2-digit
    };
    return date.toLocaleString("en-US", options).split(",").join("");
  };
  if (typeof newTask !== "string") {
    return {
      type: ADD_DONE_TASK,
      taskWithData: {
        id: nanoid(),
        text: newTask.text,
        date: setDate(),
        icon: newTask.icon,
        textIconName: newTask.textIconName,
      },
    };
  }
  return {
    type: ADD_DONE_TASK,
    taskWithData: {
      id: nanoid(),
      date: setDate(),
      text: newTask,
    }
  };
}

export function removeDoneCurrentText(filteredArray) {
  return { type: REMOVE_DONE_TASK, filteredArray };
}

export default myDoingText;
