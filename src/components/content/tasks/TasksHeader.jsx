import s from '../content.module.css'

const TasksHeader = () => {
    return (
        <div className={s.contentTitle}>
<div className='today'>
                12 ноября
            </div>
            <span className={s.black}>У вас </span><span className={s.pink}>10 задач </span><span className={s.black}>на этот день</span>
            <button className='addTask'>Добавить задачу</button>
            </div>
    )
}

export default TasksHeader;