import { useState } from 'react';
import styles from './TodoApp.module.css';

export default function TodoApp() {

    const [inputValue, setInputValue] = useState("");
    const [listTodos, setListTodos] = useState(() => {
        let todoList = [];
        if (localStorage.getItem('list_todos')) {
            todoList = JSON.parse(localStorage.getItem('list_todos'));
        };
        return todoList;
    });

    async function loadList() {
        setListTodos(JSON.parse(localStorage.getItem('list_todos')));
    }

    async function handleNewTodo() {
        let todotext = inputValue;
        let todoItem = { value: todotext, isDone: false };
        listTodos.push(todoItem);
        saveToStorage();
    }

    async function handleRemoveTodo(id) {
        listTodos.splice(id, 1);
        loadList();
        saveToStorage();
    }

    async function markAsDone(id) {
        listTodos[id].isDone = !listTodos[id].isDone;
        loadList();
        saveToStorage();
    }

    async function saveToStorage() {
        localStorage.setItem('list_todos', JSON.stringify(listTodos));
        setInputValue("");
        loadList();
    }

    return (
        <div style={{ marginTop: '15px' }}>
            <div style={{ display: 'flex' }}>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} autoComplete="off" type="text" id="floatingInput" placeholder="Digite aqui um To do" />
                <button onClick={() => handleNewTodo()} disabled={inputValue === "" ? true : false}>➕</button>
            </div>
            <hr />
            <ul className={styles.listStyle}>
                {
                    listTodos.length > 0 ?
                        listTodos.map((toDo, id) => (
                            <li key={id} className={styles.listItem}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <label className="switch" style={{ marginRight: '1rem' }}>
                                            <input type="checkbox" role="switch" onChange={() => markAsDone(id)} checked={toDo.isDone && 'checked'} />
                                            <span className="slider round" />
                                        </label>
                                    </div>
                                    <div>
                                        {toDo.value}
                                    </div>
                                </div>
                                <button onClick={() => handleRemoveTodo(id)}>❌</button>
                            </li>
                        ))
                        :
                        <p>Nenhum item</p>
                }
            </ul>
        </div>
    )
}