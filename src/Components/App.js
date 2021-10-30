import Todos from "./TodoContainer/Todos"
import ButtotAndInputForNewTodo from './AddNewTodoList/ToogledButtonAddNewTask/ToogledButtonAddNewTask'
import './App.css'
import Persons from "./Persons/Person"


const App = () => {
  return (
    <div className="root-app">
      <Todos />
      <ButtotAndInputForNewTodo />
      <Persons />
    </div>
  );
}

export default App