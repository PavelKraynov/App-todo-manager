import { nanoid } from "nanoid";

const INPUT_TEXT = "INPUT_TEXT";
const ADD_TODO_TASK = "ADD_TODO_TASK";
const REMOVE_TODO_TASK = "REMOVE_TODO_TASK";
const EDITED_TODO_TASK = "EDITED_TODO_TASK";
const ADD_NAME_FOR_TODO_TASK = "ADD_NAME_FOR_TODO_TASK";

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
    case ADD_TODO_TASK: {
      return {
        ...state,
        arrayOfTasks: [...state.arrayOfTasks, action.taskWithData],
      };
    }
    case REMOVE_TODO_TASK: {
      return {
        ...state,
        arrayOfTasks: action.filteredArray,
      };
    }
    case EDITED_TODO_TASK: {
      return {
        ...state,
        arrayOfTasks: action.addIconForTaskOfTasks,
      };
    }
    case ADD_NAME_FOR_TODO_TASK: {
      return {
        ...state,
        arrayOfTasks: action.addNameForTask,
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
  if (typeof newTask !== 'string') {
    return {
      type: ADD_TODO_TASK,
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
    type: ADD_TODO_TASK,
    taskWithData: {
      id: nanoid(),
      // text: newTask.text,
      date: setDate(),
      text: newTask,
      // icon: newTask.icon,
      // textIconName: newTask.textIconName,
    },
  };
}

export function removeToDoCurrentText(filteredArray) {
  return { type: REMOVE_TODO_TASK, filteredArray };
}

export function editedToDoTask(id, icon) {
  return (dispatch, getState) => {
    const store = getState();
    const tasks = store.myTodoText.arrayOfTasks;
    const addIconForTaskOfTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, icon };
      }
      return task;
    });
    return dispatch({ type: EDITED_TODO_TASK, addIconForTaskOfTasks });
  };
}

export function addNameToDoTask(textIconName, id) {
  return (dispatch, getState) => {
    const store = getState();
    const tasks = store.myTodoText.arrayOfTasks;
    const addNameForTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, textIconName };
      }
      return task;
    });
    return dispatch({ type: ADD_NAME_FOR_TODO_TASK, addNameForTask });
  };
}

export default myTodoText;
