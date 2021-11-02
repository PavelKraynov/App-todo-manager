import { nanoid } from "nanoid";

const INPUT_TEXT = "INPUT_TEXT";
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK"
const EDITED_TASK = "EDITED_TASK";

const initialState = {
  text: "",
  arrayOfTasks: [],
};

const myTodoText = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT: {
      return {
        ...state,
        text: action.typeText,
      };
    }
    case ADD_TASK: {
      return {
        ...state,
        arrayOfTasks: [...state.arrayOfTasks, action.taskWithData],
      };
    }
    case REMOVE_TASK: {
      return {
        ...state,
        arrayOfTasks: action.filteredArray,
      };
    }
    case EDITED_TASK: {
      return {
        ...state,
        arrayOfTasks: action.addIconForTaskOfTasks,
      };
    }
    default:
      return state;
  }
};
export function inputNewTextFunc(typeText) {
  return { type: INPUT_TEXT, typeText };
}
export function addInputTextToDo(newTask) {
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

  return {
    type: ADD_TASK,
    taskWithData: { id: nanoid(), text: newTask, date: setDate() },
  };
}

export function removeToDoCurrentText(filteredArray) {
  return { type: REMOVE_TASK, filteredArray };
}

export function editedToDoTask(id, icon) {
  return (dispatch, getState) => {
    const store =  getState()
    const tasks = store.myTodoText.arrayOfTasks
    const addIconForTaskOfTasks = tasks.map(task => {
      if(task.id === id){
       return {...task, icon}
      }
      return task
    })
    return dispatch({ type: EDITED_TASK, addIconForTaskOfTasks });
  }

}

export default myTodoText;
