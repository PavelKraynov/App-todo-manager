// import { useDispatch, useSelector } from "react-redux";
// import { addInputText, inputNewTextFunc } from "../redux/reducers/counters2";
import DoContainer from './DoContainer/DoContainer';
import './Todos.css'

const Todos = () => {
  return (
    <div className="create-todos-container">
      <DoContainer />
    </div>
  );
};

export default Todos;
