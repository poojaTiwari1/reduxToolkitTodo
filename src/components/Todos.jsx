import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return <>
        <div>Todos</div>
        {todos.map((el) => (
            <li key={el.id}>
                {el.text}

                <button onClick={() => dispatch(removeTodo(el.id))} >
                    X
                </button>
            </li>
        ))}
    </>
}

export default Todos;
