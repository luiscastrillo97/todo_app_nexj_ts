import { useState, ChangeEvent } from "react"

interface Props {
    addTodo: (text: string) => void;
}

const FormAddTodo = ({addTodo}: Props) => {
    const [text, setText] = useState('');

    const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => { 
        setText(evt.target.value);
     }

    const handleOnSubmit = (evt: ChangeEvent<HTMLFormElement> ) => {
        evt.preventDefault();
        const trimmedText = text.trim();
        if (!trimmedText) return;
        addTodo(text);
        setText("");
    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="todoInput">
                    <input 
                        type="text" 
                        id="todoInput" 
                        placeholder="What do you want ToDo?" 
                        value={text}
                        onChange={handleInputChange}    
                    />
                </label>
                <button type="submit">Add ToDo</button> 
            </form>
        </>
    )
}

export default FormAddTodo