import Todos from "./TodoContainer/Todos";
import ButtotAndInputForNewTodo from "./AddNewTodoList/ToogledButtonAddNewTask/ToogledButtonAddNewTask";
import "./App.css";


const App = () => {
  return (
    <div className="root-app" >
      <Todos />
      <ButtotAndInputForNewTodo />

    </div>
  );
};

export default App;
