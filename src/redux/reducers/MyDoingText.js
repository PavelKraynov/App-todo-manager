import { nanoid } from "nanoid";
import { useState } from "react";

const INPUT_TEXT = "INPUT_TEXT";
const ADD_DOING_TASK = "ADD_DOING_TASK";
const REMOVE_DOING_TASK = "REMOVE_DOING_TASK";
const EDIT_DOING_TASK = 'EDIT_DOING_TASK'
const ADD_NAME_FOR_TASK = "ADD_NAME_FOR_TASK";

const initialState = {
  text: "",
  arrayOfDoingTasks: [],
};

const myDoingText = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT: {
      return {
        ...state,
        text: action.typeText,
      };
    }
    case ADD_DOING_TASK: {
      return {
        ...state,
        arrayOfDoingTasks: [...state.arrayOfDoingTasks, action.taskWithData],
      };
    }
    case REMOVE_DOING_TASK: {
      return {
        ...state,
        arrayOfDoingTasks: action.filteredArray,
      };
    }
    case EDIT_DOING_TASK: {
      return {
        ...state,
        arrayOfDoingTasks: action.addIconsForTask,
      };
    }
    case ADD_NAME_FOR_TASK: {
      return {
        ...state,
        arrayOfDoingTasks: action.addNameForTask,
      };
    }
    default:
      return state;
  }
};
export function inputNewTextFunc(typeText) {
  return { type: INPUT_TEXT, typeText };
}
export function addInputTextDoing(newTask) {
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
    type: ADD_DOING_TASK,
    taskWithData: { id: nanoid(), text: newTask, date: setDate() },
  };
}

export function removeDoingCurrentText(filteredArray) {
  return { type: REMOVE_DOING_TASK, filteredArray };
}


export function editDoingTask(id, icon){
  return (dispatch, useState) => {
    const store = useState();
    const doingTasks = store.myDoingText.arrayOfDoingTasks;
    const addIconsForTask = doingTasks.map((task) => {
      if (task.id === id) {
        return { ...task, icon };
      }
      return task;
    });
    return dispatch({ type: EDIT_DOING_TASK, addIconsForTask });
  };
  }


  export function addNameDoingTask(textIconName, id){
    return (dispatch, useState) => {
      const store = useState()
      const doingTasks = store.myDoingText.arrayOfDoingTasks;
      const addNameForTask = doingTasks.map((task)=> {
        if(task.id === id  ){
          return { ...task, textIconName };
        }
        return task
      })
      return dispatch({ type: ADD_NAME_FOR_TASK, addNameForTask });
    }
  }

export default myDoingText;
