import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface Props {
    todos: Todo[]
    toggleTodo: (selectedTodo: Todo) => void;
    removeTodo: (selectedTodo: Todo) => void;
}

const Todos = ({todos, toggleTodo, removeTodo}: Props) => {
  return (
    <>
        <div>
        {
          todos.length !== 0 ? todos.map((todo) => (
            <TodoItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
          )) : <article><span>There is nothing to do</span></article>
        }
      </div>
    </>
  )
}

export default Todos