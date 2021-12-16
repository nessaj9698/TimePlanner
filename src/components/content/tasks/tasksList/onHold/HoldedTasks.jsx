


const HoldedTasks = () => {
    return (
        <div className='holdedTasksList'>
            <div className='onHold'>
                Запланированные задачи:
            </div>
            <div className='task'>
                <span className='taskText'>Погулять с собакой</span>
                <span className='importance'>Важно</span>
                <span className='deleteTrigger'>x</span>
            </div>
            <div className='task'>
                <span className='taskText'>Покушать</span>
                <span className='importance'>Очень важно</span>
                <span className='deleteTrigger'>x</span>
            </div>
            <div className='task'>
                <span className='taskText'>Поспать</span>
                <span className='importance'>Маловажно</span>
                <span className='deleteTrigger'>x</span>
            </div>
        </div>
    )
}


export default HoldedTasks;