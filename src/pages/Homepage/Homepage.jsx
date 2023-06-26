import TodoForm from '../../components/TodoForm/TodoForm'
import TodoList from '../../components/TodoList/TodoList'
import s from  './Homepage.module.css'

export default function Homepage(){
    
    return (
        <section className={s.todo}>
            <div className={s.todo__body}>
                <TodoForm/>
                <TodoList />
            </div>
        </section>
    )
}