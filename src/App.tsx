import { useState } from "react"
import FormAddTodo from "./components/FormAddTodo";
import Todos from "./components/Todos";

export interface Todo {
  text: string;
  complete: boolean;
}

const initialTodos = [
  {
    text: "Learn React JS",
    complete: false,
  },
  {
    text: "Learn Next JS",
    complete: true,
  }
]

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false,
    };
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (selectedTodo: Todo) => {
    setTodos(prevTodos => {
      return prevTodos.map((todo) => {
        if (selectedTodo === todo) {
          return {
            ...todo,
            complete: !todo.complete,
          }
        }
        return todo
      });
    })  
  }

  const removeTodo = (selectedTodo: Todo) => { 
    setTodos(prevTodos => {
      return prevTodos.filter((todo) => todo !== selectedTodo)
    })
   }

  return (
    <div className="container">
      <h1>ToDo</h1>
      <FormAddTodo addTodo={addTodo}/>
      <Todos todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default App