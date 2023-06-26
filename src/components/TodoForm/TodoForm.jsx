import s from './TodoForm.module.css'
import { useRef,useContext } from 'react';
import { NumberContext } from '../../context/NumberContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function TodoForm(){
    const {dispatch} = useContext(NumberContext)
    const formInput = useRef(null)

    function handlerSubmit(e){
        e.preventDefault();
        if(formInput.current.value.trim()){
            dispatch({
                type:'Add',
                payload:formInput.current.value
            })
        }else{
            alert('Please fill out this field.')
        }
    e.target.reset()

    }
    return(
        <>
             <h2>TODO</h2>
        <form onSubmit={(e)=> handlerSubmit(e)} className={s.form}>
            <input ref={formInput} type="text" className={s.input} placeholder="Add your new todo"  pattern="[A-Za-z]*" minLength="3" maxLength="50"/>
            <button className={s.formBtn} type="submit"><FontAwesomeIcon icon={faPlus} /></button>
        </form>
        </>
    )
}