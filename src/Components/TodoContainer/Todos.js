// import { useDispatch, useSelector } from "react-redux";
// import { addInputText, inputNewTextFunc } from "../redux/reducers/counters2";
import DoContainer from './DoContainer/DoContainer';
import DoingContainer from './DoingContainer/DoingContainer'
import DoneContainer from './DoneContainer/DoneContainer'
import './Todos.css'

const Todos = () => {
  return (
    <div className="create-todos-container">
      <DoContainer />
      <DoingContainer />
      <DoneContainer />
    </div>
  );
};

export default Todos;
