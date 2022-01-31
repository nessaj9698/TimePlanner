import s from '../content.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../../redux/store'
import TaskForm from './taskForm/taskForm'
import getForecast from '../../../api/location-api'

const TasksHeader = () => {
    const dispatch = useDispatch()

    const [addTask, addTaskActive] = useState(false)
    const [taskCount, setTaskCount] = useState(0)
    const today = useSelector(state => state.rootReducer.currentDay)
    const events = useSelector(state => state.rootReducer.plannedEvents)
    const forecast = useSelector(state => state.rootReducer.forecast)
    
    let tasks = []
    useEffect(() => {
        getForecast(dispatch)
    }, [])
    useEffect(() => {
        let eventsCount = store.getState().rootReducer.plannedEvents
        let count = []
        for (let prop in eventsCount) {
            count.push(prop)
            tasks.push(eventsCount[prop].task)
        }
        setTaskCount(count.length)
    }, [events])


    
    return (
        <div className={s.contentTitle}>
            <div className='today flex'>
                <span style={{marginRight:'20px'}} className='today-date'>{today}</span>
                <div className='weather flex'>
                    {forecast.map(item =>
                        item.date.fullDate == today ? 
                        <div className='weatherItem'>
                            <div className='weatherTime'>{item.date.time}</div>
                            <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="" />
                           
                            <div className='weatherTemperature'>{item.temperature}</div>
                        </div> : false
                    )}
                </div>

            </div>
            <div className='content-title'>
            <span className={s.black}>У вас </span><span className={s.pink}>{taskCount} задач </span><span className={s.black}>на этот день</span>
            </div>
            <div className='add-task-wrapper'>
            <button className='addTask' onClick={() => { addTaskActive(true) }}>Добавить задачу</button>
            </div>
            {addTask ? <TaskForm
                addTaskActive={addTaskActive}
                events={tasks}
            /> : false}

        </div>
    )


}

export default TasksHeader;