import { Link } from 'react-router-dom';

import TodoAppC from '../../../Components/TodoApp';

export function TodoApp() {

    return (
        <>
            <h3>To Do App</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>
                    <Link to={'/open-playground/menu/utilitarios'}><i className='fa fa-caret-left' /> Voltar</Link>
                </span>
                <div className='tooltip' style={{ textAlign: 'right' }}>
                    Info <i className='fa fa-info-circle' />
                    <span>
                        Crie uma lista de tarefas com marcadores para itens concluídos
                    </span>
                </div>
            </div>
            <div className="card">
                <TodoAppC />
            </div>
        </>
    )
}