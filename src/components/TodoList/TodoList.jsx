import s from './TodoList.module.css'
import { useContext,useState } from 'react';
import { NumberContext } from '../../context/NumberContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import Modal from '../modal/Modal';


export default function TodoList(){
    const {state,dispatch} = useContext(NumberContext)
    const [modal,setModal] = useState({status:false,id:''})

    function deleteTask(el,id){
    el.target.closest('li').classList.add(s.deleteAnim)
    setTimeout(()=>{
        dispatch({
            type:'Delete',
            payload:id
        })
    },800)
    }
    function isChecked(id){
        dispatch({
            type:'Change',
            payload:id
        })
    }
    function DeleteCheckedTasks(){
        dispatch({
            type:'DeleteAll',
        })
    }
    return(
        <>
            <ul className={s.list}>
                {state.map(e=>{
                    return <li className={s.list__item} style={e.checked ? {backgroundColor:'#2b4902'} : null}  key={e.id}>
                        <label className={s.checkbox}>
                            <label htmlFor={`checkbox${e.id}`}></label>
                            <input id={`checkbox${e.id}`} type="checkbox" onChange={()=> isChecked(e.id)}/>
                            <span className={s.checkmark}></span>
                            <span className={s.task}>{e.text}</span>
                        </label>
                        <button className={s.edit} onClick={()=> setModal({status:true,id:e.id})}><FontAwesomeIcon style={{fontSize:'17px'}} icon={faPenToSquare}/></button>
                        <button className={s.del} onClick={(el)=> deleteTask(el,e.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </li>
                })}
            </ul>
            <div className={s.todo__footer}>
                <p className={s.checkedItems}>{state.filter(el=> el.checked).length} / {state.length} </p>
                <input type="button" className={s.removeChecked} defaultValue="Remove checked" onClick={DeleteCheckedTasks} />
                <Modal modal={modal} setModal={setModal} state={state} dispatch={dispatch}/>
            </div>
        </>
    )
}