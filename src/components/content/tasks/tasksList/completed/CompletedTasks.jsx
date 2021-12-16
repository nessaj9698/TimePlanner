


const CompletedTasks = () => {
    return (
        <div className='completedTasksList'>
            
            <div className='completedTasks'>
                Выполненные задачи:
            </div>
            <div className='task'>
                <span className='taskText'>Погулять с женой</span>
                <span className='importance'>Важно</span>
                <span className='deleteTrigger'>x</span>
            </div>
            <div className='task'>
                <span className='taskText'>Проснуться</span>
                <span className='importance'>Очень важно</span>
                <span className='deleteTrigger'>x</span>
            </div>
            <div className='task'>
                <span className='taskText'>Почистить зубы</span>
                <span className='importance'>Маловажно</span>
                <span className='deleteTrigger'>x</span>
            </div>
            
       
        </div>
    )
}

export default CompletedTasks;