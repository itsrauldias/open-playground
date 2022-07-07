import { Link } from 'react-router-dom';

import TodoAppC from '../../../Components/TodoApp';

export function TodoApp() {

    return (
        <>
            <h3>To Do App</h3>
            <Link to={'/open-playground/menu/utilitarios'}><i className='fa fa-caret-left' /> Voltar</Link>
            <br /><br />
            <div className="card">
                <TodoAppC />
            </div>
        </>
    )
}