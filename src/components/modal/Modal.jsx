import s from './Modal.module.css'
import {useState,useEffect,useRef} from 'react'

export default function Modal({modal,setModal,state,dispatch}){
    let selectInput = useRef(null)
    const[editTask,setEditTask] = useState({})

    useEffect(()=>{
        setEditTask({ ...state.find(el=> el.id === modal.id)})
    },[modal])
 
  function handlerSubmit(e){
      e.preventDefault()
    const [input] = e.target
    dispatch({
        type:'Edit',
        payload:{text:input.value,id:modal.id}
    })
   
    modal.status = false
  }
    if(modal.status){
        selectInput.current && selectInput.current.focus()
        return (
            <section className={modal.status ? s.modal__body_active : s.modal__body} onClick={()=> setModal(false) }>
                <div className={s.modal} onClick={(e)=> e.stopPropagation()}>
                    <h1>Edit Task</h1>
                    <form onSubmit={(e)=> handlerSubmit(e)}>
                    <input ref={selectInput} type="text" defaultValue={editTask.text} autoFocus />
                    <button>Edit Task</button>
                    </form>
                </div>
            </section>
        )
    }
}